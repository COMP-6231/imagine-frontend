import request from "../utils/request";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const joinBetaWaitlist = (data?: { email?: string }): Promise<any> => {
  return new Promise((resolve, reject) => {
    request({
      url: baseURL + "join-beta",
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
