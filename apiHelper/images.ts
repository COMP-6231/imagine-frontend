import axios from "axios";
import request from "../utils/request";

export interface iImage {
  size: number;
  url: string;
  width: number;
  height: number;
  upscaled: boolean;
}

export interface iImagePayload {
  id: number;
  content: string;
  images: iImage[];
}

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const getImagesThroughNextAPI = (data?: {
  query?: string;
  search_after?: string;
}): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios({
      url: "/api/get-images",
      method: "post",
      data,
    })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getImageByID = (data: { id: string }): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseURL + "search/" + data.id,
      method: "post",
    })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const generateImagesViaSQS = (data?: {
  prompt: string;
  count: number;
  width: number;
  height: number;
  scheduler: string;
  guidance_scale: number;
  high_noise_frac: number;
  prompt_strength: number;
  num_inference_steps: number;
}): Promise<any> => {
  return new Promise((resolve, reject) => {
    request({
      url: "/image-generation/generate-via-sqs",
      method: "post",
      data,
    })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getImagesHistory = (offset: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    request({
      url: `/image-generation/get-all?offset=${offset}`,
      method: "post"
    })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
