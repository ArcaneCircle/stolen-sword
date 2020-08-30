let _id = 0;
export const key = () => _id++;

export const KEY_ENEMY_IS_DEFENCING = key();
export const KEY_ENEMY_IS_UNTOUCHABLE = key();
export const KEY_ENEMY_DEAD_FRAME = key();
export const KEY_ENEMY_IS_DEAD = key();
export const KEY_ENEMY_HEALTH = key();
export const KEY_ENEMY_LAST_DAMAGE_FRAME = key();

export const KEY_STAGE_INITIATE = key();
export const KEY_STAGE_IS_WAVE_CLEAN = key();
export const KEY_STAGE_WAVES = key();
export const KEY_STAGE_TRANSITION = key();
export const KEY_STAGE_TRANSITION_FRAME = key();
export const KEY_STAGE_ENDING_CUT_SCENE = key();
export const KEY_STAGE_ENDING_CUT_SCENE_FRAME = key();
export const KEY_STAGE_ENDING_CUT_SCENE_INDEX = key();
export const KEY_STAGE_ENDING_CUT_SCENE_KEY = key();
export const KEY_STAGE_START_KEY = key();

export const KEY_OBJECT_ON_UPDATE = key();
export const KEY_OBJECT_ON_DEAD = key();
export const KEY_OBJECT_FRAME = key();
export const KEY_OBJECT_INITIAL_POS = key();
export const KEY_OBJECT_ON_COLLIDED = key();
export const KEY_OBJECT_IS_COLLIDED = key();
export const KEY_OBJECT_EVENT_GET_OFFSET = key();
export const KEY_OBJECT_EVENT_IS_REPEAT = key();
export const KEY_OBJECT_EVENT_LAST_TRIGGER_FRAME = key();
export const KEY_OBJECT_EVENT_FIRST_FRAME_TRIGGER = key();

export const KEY_PLAYER_DAMAGE_FRAME = key();
export const KEY_PLAYER_DEATH_FRAME = key();

export const KEY_PROJECTILE_IS_COMSUMED = key();
export const KEY_PROJECTILE_SORUCE = key();

export const KEY_GRAPHIC_IS_ANIMATION_FINISH = key();

export const SIDE_T = 't';
export const SIDE_R = 'r';
export const SIDE_B = 'b';
export const SIDE_L = 'l';

export const ASPECT_RATIO = 16 / 11;
export const DEFAULT_FRAME_HEIGHT = 667;
export const DEFAULT_FRAME_WIDTH = DEFAULT_FRAME_HEIGHT / ASPECT_RATIO;
export const SLOW_DOWN_DURATION = 500;
export const SLOW_MOTION_TIME_RATIO = 0.05;
export const NORAML_TIME_RATIO = 1;
export const FRAME_DURAITON = 16;

export const G = 0.5;
export const GROUND_FRICTION = 0.2;
export const WALL_FRICTION = 0.3;

export const MAX_RELEASE_VELOCITY = 14;
export const DRAG_FORCE_FACTOR = 10;
export const DEFAULT_DASH = 2;
export const MINIMUM_DASH_VELOCITY = 2;
export const TRAJECTORY_LINE_LENGTH = 200;
export const DEFAULT_HEALTH = 2;

export const ENEMY_DEATH_ANIMATION_DURATION = 500;
export const PLAYER_DAMAGE_INVINCIBLE_DURAION = 1000;
export const PLAYER_DEATH_ANIMATION_DURATION = 2000;
// export const STAGE_TRANSITION_DURAION = 10;
export const STAGE_TRANSITION_DURAION = 2000;