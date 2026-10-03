/* ============================================================
   TWD — BALANCED CHARACTER SCORING ENGINE
   ============================================================

   Design goals:
   - All 19 characters can realistically appear
   - Major characters remain more common
   - Minor characters remain rarer but possible
   - No random result forcing
   - Same answers always produce the same result
   - Affinity is normalized per character
   - Characters with many affinity routes do NOT automatically win
   - Personality matching remains important but does not dominate
   ============================================================ */


/* ============================================================
   1. CHARACTER AFFINITY MAXIMUMS
   ============================================================

   For every character, calculate the maximum affinity a player
   could theoretically collect from the existing 30 questions.

   This is important because characters have different numbers
   of affinity routes.

   Example:

   Eugene may have 26 affinity routes.
   Gabriel may have only 5.

   Raw affinity therefore unfairly favors Eugene.

   We compare each character against THEIR OWN maximum instead.
   ============================================================ */

const CHARACTER_AFFINITY_MAX = {};

Object.keys(CHARACTERS).forEach(characterId => {

    let maxPossible = 0;

    questions.forEach(question => {

        let questionMaximum = 0;

        question.answers.forEach(answer => {

            const value = Number(
                answer.affinity?.[characterId] || 0
            );

            if (value > questionMaximum) {
                questionMaximum = value;
            }
        });

        maxPossible += questionMaximum;
    });

    CHARACTER_AFFINITY_MAX[characterId] = maxPossible;
});


/* ============================================================
   2. NORMALIZED AFFINITY
   ============================================================

   Converts raw affinity into a 0–100 score relative to that
   character's own theoretical maximum.

   Slight exponent compression prevents extremely high affinity
   from becoming overwhelmingly dominant.
   ============================================================ */

function calculateAffinityScore(characterId, rawAffinity) {

    const maximum =
        Number(CHARACTER_AFFINITY_MAX[characterId] || 0);

    if (maximum <= 0) {
        return 0;
    }

    const raw =
        Math.max(0, Number(rawAffinity) || 0);

    const ratio =
        Math.max(
            0,
            Math.min(
                1,
                raw / maximum
            )
        );

    return Math.pow(ratio, 0.90) * 100;
}


/* ============================================================
   3. ROUTE IDENTITY BONUS
   ============================================================

   Rewards a character when the player has selected a substantial
   proportion of that character's unique affinity routes.

   This is deliberately based on RELATIVE affinity rather than
   raw affinity.

   It gives sparse characters a legitimate way to break through.
   ============================================================ */

function calculateRouteIdentityBonus(
    characterId,
    rawAffinity
) {

    const maximum =
        Number(CHARACTER_AFFINITY_MAX[characterId] || 0);

    if (maximum <= 0) {
        return 0;
    }

    const ratio =
        Math.max(
            0,
            Math.min(
                1,
                (Number(rawAffinity) || 0) / maximum
            )
        );


    if (ratio >= 0.70) return 6.0;
    if (ratio >= 0.55) return 5.0;
    if (ratio >= 0.40) return 3.5;
    if (ratio >= 0.25) return 2.0;
    if (ratio >= 0.12) return 0.5;

    return 0;
}


/* ============================================================
   4. ACCESSIBILITY
   ============================================================ */

const ACCESSIBILITY_MIN = 3.8;
const ACCESSIBILITY_MAX = 8.0;
const ACCESSIBILITY_BONUS_MAX = 2.5;

function calculateAccessibilityBonus(characterId) {

    const value =
        Number(CHARACTER_ACCESSIBILITY[characterId]);

    if (!Number.isFinite(value)) {
        return 0;
    }

    const normalized =
        (value - ACCESSIBILITY_MIN) /
        (ACCESSIBILITY_MAX - ACCESSIBILITY_MIN);

    return Math.max(
        0,
        Math.min(
            ACCESSIBILITY_BONUS_MAX,
            normalized * ACCESSIBILITY_BONUS_MAX
        )
    );
}


/* ============================================================
   5. SIGNATURE ACTIVATION
   ============================================================

   Signature matching is now deliberately modest.

   The signature should identify a character, not overpower the
   affinity/question system.

   Maximum bonus = 8.
   ============================================================ */

function calculateSignatureActivation(
    characterId,
    traitScores
) {

    const signature =
        CHARACTER_SIGNATURES[characterId];

    if (!signature) {
        return 0;
    }

    const traits = [
        ...(signature.primary || []),
        ...(signature.secondary || [])
    ];

    let veryClose = 0;
    let close = 0;

    traits.forEach(trait => {

        const index =
            TRAIT_KEYS.indexOf(trait);

        if (index === -1) {
            return;
        }

        const target =
            Number(
                CHARACTERS[characterId]?.scores?.[index] ?? 50
            );

        const actual =
            Number(
                traitScores?.[trait] ?? 50
            );

        const difference =
            Math.abs(actual - target);

        if (difference <= 8) {
            veryClose++;
        }
        else if (difference <= 15) {
            close++;
        }
    });


    let bonus = 0;

    if (veryClose >= 2) {
        bonus += 2;
    }

    if (veryClose >= 3) {
        bonus += 2;
    }

    if (veryClose >= 4) {
        bonus += 2;
    }

    if (close + veryClose >= 3) {
        bonus += 1;
    }

    if (close + veryClose >= 4) {
        bonus += 1;
    }

    return Math.min(8, bonus);
}


/* ============================================================
   6. CORE SIGNATURE SCORE
   ============================================================ */

function calculateCoreSignatureScore(
    characterId,
    traitScores
) {

    const signature =
        CHARACTER_SIGNATURES[characterId];

    if (!signature || !signature.primary) {
        return 50;
    }

    const values = [];

    signature.primary.forEach(trait => {

        const index =
            TRAIT_KEYS.indexOf(trait);

        if (index === -1) {
            return;
        }

        const target =
            Number(
                CHARACTERS[characterId]?.scores?.[index] ?? 50
            );

        const actual =
            Number(
                traitScores?.[trait] ?? 50
            );

        const difference =
            Math.abs(actual - target);

        const similarity =
            Math.max(
                0,
                100 - difference * 2
            );

        values.push(similarity);
    });

    if (!values.length) {
        return 50;
    }

    return (
        values.reduce(
            (sum, value) => sum + value,
            0
        ) / values.length
    );
}


/* ============================================================
   7. SECONDARY SIGNATURE SCORE
   ============================================================ */

function calculateSecondarySignatureScore(
    characterId,
    traitScores
) {

    const signature =
        CHARACTER_SIGNATURES[characterId];

    if (!signature || !signature.secondary) {
        return 50;
    }

    const values = [];

    signature.secondary.forEach(trait => {

        const index =
            TRAIT_KEYS.indexOf(trait);

        if (index === -1) {
            return;
        }

        const target =
            Number(
                CHARACTERS[characterId]?.scores?.[index] ?? 50
            );

        const actual =
            Number(
                traitScores?.[trait] ?? 50
            );

        const difference =
            Math.abs(actual - target);

        const similarity =
            Math.max(
                0,
                100 - difference * 2
            );

        values.push(similarity);
    });

    if (!values.length) {
        return 50;
    }

    return (
        values.reduce(
            (sum, value) => sum + value,
            0
        ) / values.length
    );
}


/* ============================================================
   8. OVERALL TRAIT SIMILARITY
   ============================================================ */

function calculateOverallTraitScore(
    characterId,
    traitScores
) {

    const character =
        CHARACTERS[characterId];

    if (!character || !Array.isArray(character.scores)) {
        return 50;
    }

    let totalDifference = 0;
    let count = 0;

    TRAIT_KEYS.forEach((trait, index) => {

        const target =
            Number(character.scores[index] ?? 50);

        const actual =
            Number(traitScores?.[trait] ?? 50);

        totalDifference +=
            Math.abs(actual - target);

        count++;
    });

    if (!count) {
        return 50;
    }

    const averageDifference =
        totalDifference / count;

    return Math.max(
        0,
        100 - averageDifference * 2
    );
}


/* ============================================================
   9. FINAL CHARACTER SCORE
   ============================================================

   New weighting:

   Core signature       28%
   Affinity             42%
   Overall personality  14%
   Secondary signature  10%
   Neutral baseline      6%

   Additional:
   Signature activation  up to +8
   Route identity        up to +6
   Accessibility         up to +2.5

   Affinity is now the strongest individual component.

   Crucially, affinity is normalized per character.
   ============================================================ */

function calculateCharacterMatch(
    characterId,
    traitScores,
    rawAffinity
) {

    const coreScore =
        calculateCoreSignatureScore(
            characterId,
            traitScores
        );

    const affinityScore =
        calculateAffinityScore(
            characterId,
            rawAffinity
        );

    const overallScore =
        calculateOverallTraitScore(
            characterId,
            traitScores
        );

    const secondaryScore =
        calculateSecondarySignatureScore(
            characterId,
            traitScores
        );

    const activation =
        calculateSignatureActivation(
            characterId,
            traitScores
        );

    const routeIdentity =
        calculateRouteIdentityBonus(
            characterId,
            rawAffinity
        );

    const accessibility =
        calculateAccessibilityBonus(
            characterId
        );


    const finalScore =
        (coreScore * 0.28) +
        (affinityScore * 0.42) +
        (overallScore * 0.14) +
        (secondaryScore * 0.10) +
        (50 * 0.06) +
        activation +
        routeIdentity +
        accessibility;


    return finalScore;
}


/* ============================================================
   10. CHARACTER MATCH
   ============================================================ */

function calculateCharacterMatches(
    traitScores,
    affinityScores
) {

    const results = [];

    Object.keys(CHARACTERS).forEach(characterId => {

        const rawAffinity =
            Number(
                affinityScores?.[characterId] || 0
            );

        const score =
            calculateCharacterMatch(
                characterId,
                traitScores,
                rawAffinity
            );

        results.push({
            id: characterId,
            name: CHARACTERS[characterId].name,
            score,
            rawAffinity,
            affinityMaximum:
                CHARACTER_AFFINITY_MAX[characterId],
            affinityRatio:
                CHARACTER_AFFINITY_MAX[characterId] > 0
                    ? rawAffinity /
                      CHARACTER_AFFINITY_MAX[characterId]
                    : 0
        });
    });


    results.sort(
        (a, b) => b.score - a.score
    );

    return results;
}


/* ============================================================
   11. FINAL PERSONALITY
   ============================================================ */

function calculateFinalPersonality(
    traitScores,
    affinityScores
) {

    const matches =
        calculateCharacterMatches(
            traitScores,
            affinityScores
        );

    if (!matches.length) {
        return null;
    }

    return matches[0];
}
