export const errorMessage = (message: string = "error") => {
  return {
    ok: false,
    message,
    data: null,
  };
};
