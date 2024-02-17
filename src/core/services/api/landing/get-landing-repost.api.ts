import http from "@/core/services/interceptor";

export const getLandingRepost = async () => {
  const response = await http.get(`/Home/LandingReport`);

  return response.data;
};
