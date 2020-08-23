let _id = 0;
export const key = () => _id++;

export const KEY_ENEMY_TYPE = key();
export const KEY_ENEMY_IS_INVINCIBLE = key();
export const KEY_ENEMY_DEAD_FRAME = key();
export const KEY_ENEMY_IS_DEAD = key();

export const KEY_STAGE_INITIATE = key();
export const KEY_STAGE_LOOP = key();
export const KEY_STAGE_IS_WAVE_CLEAN = key();
export const KEY_STAGE_WAVES = key();

export const KEY_OBJECT_ON_UPDATE = key();
export const KEY_OBJECT_FRAME = key();
export const KEY_OBJECT_INITIAL_POS = key();
export const KEY_OBJECT_ON_COLLIDED = key();
export const KEY_OBJECT_IS_COLLIDED = key();
export const KEY_OBJECT_EVENT_GET_OFFSET = key();
export const KEY_OBJECT_EVENT_IS_REPEAT = key();
export const KEY_OBJECT_EVENT_LAST_TRIGGER_FRAME = key();

export const SIDE_T = 't';
export const SIDE_R = 'r';
export const SIDE_B = 'b';
export const SIDE_L = 'l';

export const DEFAULT_FRAME_HEIGHT = 667;
export const DEFAULT_FRAME_WIDTH = DEFAULT_FRAME_HEIGHT / 16 * 9;
export const SLOW_DOWN_DURATION = 500;
export const SLOW_MOTION_TIME_RATIO = 0.05;
export const NORAML_TIME_RATIO = 1;
export const FRAME_DURAITON = 16;

export const G = 0.4;
export const GROUND_FRICTION = 0.2;
export const WALL_FRICTION = 0.15;

export const MAX_RELEASE_VELOCITY = 15;
export const DRAG_FORCE_FACTOR = 15;
export const DEFAULT_DASH = 2;
export const MINIMUM_DASH_VELOCITY = 2;
export const TRAJECTORY_LINE_LENGTH = 200;

export const ENEMY_DEATH_ANIMATION_DURATION = 500;