export type RoutesType = {
  App: string,
  Auth: string,
  HomeScreen: string,
  ExploreScreen: string,
  UploadScreen: string,
  NotificationScreen: string,
  ProfileScreen: string,
  TabNavigator: string,
  ProfileViewScreen: string,
  MessageScreen: string,
  ConversationScreen: string,
  PostViewScreen: string,
  LoginScreen: string
};

export type NotificationTextType = {
  FOLLOW: string,
  COMMENT: string,
  LIKE: string,
};

export type FollowInteractionType = {
  FOLLOW: string,
  UNFOLLOW: string
};

export type LikeActionType = {
  LIKE: string,
  UNLIKE: string
};

export type ConnectionsType = {
  FOLLOWING: string,
  FOLLOWERS: string
};

export type IconSizesType = {
  x00: number,
  x0: number,
  x1: number,
  x2: number,
  x3: number,
  x4: number,
  x5: number,
  x6: number,
  x7: number,
  x8: number,
  x9: number
};

export type Dimensions = {
  height: number,
  width: number
};

export type PostDimensionsType = {
  Small: Dimensions,
  Medium: Dimensions,
  Large: Dimensions
};

export type HandleAvailableColorType = {
  true: string,
  false: string
};

export type PollIntervalsType = {
  messages: number,
  explore: number,
  profile: number,
  postView: number,
  profileView: number,
  connections: number,
  interaction: number,
  notification: number
};