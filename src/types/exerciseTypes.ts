export interface ExerciseDetail {
  id: string;
  bodyPart: string;
  gifUrl: string;
  name: string;
  target: string;
  equipment: string;
  instructions: string[];
  secondaryMuscles: string[];
}

export interface Thumbnail {
  width: number;
  height: number;
  url: string;
}

export interface ExerciseVideo {
  video: {
    videoId: string;
    thumbnails: Thumbnail[];
    title: string;
    channelName: string;
  };
}
