// Quarter and star SVGs
import q0Star from './q0Star.svg?url';
import q1Base from './q1Base.svg?url';
import q2Active from './q2Active.svg?url';
import q2Base from './q2Base.svg?url';
import q3Base from './q3Base.svg?url';
import q4Active from './q4Active.svg?url';
import q4Base from './q4Base.svg?url';
import star from './star.svg?url';
import glowingStar from './glowingStar.svg?url';

// mainAchievements
import antiCaseActive from './mainAchievements/antiCaseActive.svg?url';
import antiCaseBase from './mainAchievements/antiCaseBase.svg?url';
import antiControlActive from './mainAchievements/antiControlActive.svg?url';
import antiControlActiveInverted from './mainAchievements/antiControlActiveInverted.svg?url';
import antiControlBase from './mainAchievements/antiControlBase.svg?url';
import antiControlBaseInverted from './mainAchievements/antiControlBaseInverted.svg?url';
import bookActive from './mainAchievements/bookActive.svg?url';
import bookBase from './mainAchievements/bookBase.svg?url';
import boxActive from './mainAchievements/boxActive.svg?url';
import boxActiveInverted from './mainAchievements/boxActiveInverted.svg?url';
import boxBase from './mainAchievements/boxBase.svg?url';
import boxBaseInverted from './mainAchievements/boxBaseInverted.svg?url';
import cupActive from './mainAchievements/cupActive.svg?url';
import cupActiveInverted from './mainAchievements/cupActiveInverted.svg?url';
import cupBase from './mainAchievements/cupBase.svg?url';
import cupBaseInverted from './mainAchievements/cupBaseInverted.svg?url';
import diplomActive from './mainAchievements/diplomActive.svg?url';
import diplomBase from './mainAchievements/diplomBase.svg?url';
import educationActive from './mainAchievements/educationActive.svg?url';
import educationBase from './mainAchievements/educationBase.svg?url';
import expertActive from './mainAchievements/expertActive.svg?url';
import expertActiveInverted from './mainAchievements/expertActiveInverted.svg?url';
import expertBase from './mainAchievements/expertBase.svg?url';
import expertBaseInverted from './mainAchievements/expertBaseInverted.svg?url';
import giftBoxActive from './mainAchievements/giftBoxActive.svg?url';
import giftBoxActiveInverted from './mainAchievements/giftBoxActiveInverted.svg?url';
import giftBoxBase from './mainAchievements/giftBoxBase.svg?url';
import giftBoxBaseInverted from './mainAchievements/giftBoxBaseInverted.svg?url';
import likeActive from './mainAchievements/likeActive.svg?url';
import likeBase from './mainAchievements/likeBase.svg?url';
import mentorActive from './mainAchievements/mentorActive.svg?url';
import mentorActiveInverted from './mainAchievements/mentorActiveInverted.svg?url';
import mentorBase from './mainAchievements/mentorBase.svg?url';
import mentorBaseInverted from './mainAchievements/mentorBaseInverted.svg?url';


// Fallbacks for missing files (use q0Star / q1Base)
const q1Active = q1Base;
const starListActive = q0Star;
const starListBase = q0Star;
const cosmoCatQuarterTemplate = q1Base;

export const SVG_URLS = {
    STAR: star,
    GLOWING_STAR: glowingStar,
    QUARTER_ONE_ACTIVE: q1Active,
    QUARTER_ONE_BASE: q1Base,
    QUARTER_TWO_ACTIVE: q2Active,
    QUARTER_TWO_BASE: q2Base,
    QUARTER_THREE_ACTIVE: q3Base,
    QUARTER_THREE_BASE: q3Base,
    QUARTER_FOUR_ACTIVE: q4Active,
    QUARTER_FOUR_BASE: q4Base,
    STAR_ACTIVE: starListActive,
    STAR_BASE: starListBase,
    COSMO_CAT_QUARTER_STARRY_SKY: cosmoCatQuarterTemplate,
    YEAR_STAR: q0Star,
    YEAR_STAR_Q1: q1Base,
    YEAR_STAR_Q2: q2Base,
    YEAR_STAR_Q3: q3Base,
    YEAR_STAR_Q4: q4Base,
    GIFT_BOX_ACTIVE: giftBoxActive,
    GIFT_BOX_BASE: giftBoxBase,
    GIFT_BOX_ACTIVE_INVERTED: giftBoxActiveInverted,
    GIFT_BOX_BASE_INVERTED: giftBoxBaseInverted,
    DIPLOM_ACTIVE: diplomActive,
    DIPLOM_BASE: diplomBase,
    EDUCATION_ACTIVE: educationActive,
    EDUCATION_BASE: educationBase,
    MENTOR_ACTIVE: mentorActive,
    MENTOR_BASE: mentorBase,
    MENTOR_ACTIVE_INVERTED: mentorActiveInverted,
    MENTOR_BASE_INVERTED: mentorBaseInverted,
    CUP_ACTIVE: cupActive,
    CUP_BASE: cupBase,
    CUP_ACTIVE_INVERTED: cupActiveInverted,
    CUP_BASE_INVERTED: cupBaseInverted,
    LIKE_ACTIVE: likeActive,
    LIKE_BASE: likeBase,
    ANTI_CONTROL_ACTIVE: antiControlActive,
    ANTI_CONTROL_BASE: antiControlBase,
    ANTI_CONTROL_ACTIVE_INVERTED: antiControlActiveInverted,
    ANTI_CONTROL_BASE_INVERTED: antiControlBaseInverted,
    ANTI_CASE_ACTIVE: antiCaseActive,
    ANTI_CASE_BASE: antiCaseBase,
    BOOK_ACTIVE: bookActive,
    BOOK_BASE: bookBase,
    BOX_ACTIVE: boxActive,
    BOX_BASE: boxBase,
    BOX_ACTIVE_INVERTED: boxActiveInverted,
    BOX_BASE_INVERTED: boxBaseInverted,
    EXPERT_ACTIVE: expertActive,
    EXPERT_BASE: expertBase,
    EXPERT_ACTIVE_INVERTED: expertActiveInverted,
    EXPERT_BASE_INVERTED: expertBaseInverted,
} as const;
