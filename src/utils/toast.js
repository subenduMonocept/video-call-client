import { toast } from "react-toastify";

export const showToast = {
  success: (message = "Success", options = {}) =>
    toast.success(message, { ...options }),

  error: (message = "Something went wrong", options = {}) =>
    toast.error(message, { ...options }),

  info: (message = "Info", options = {}) => toast.info(message, { ...options }),

  warning: (message = "Warning", options = {}) =>
    toast.warning(message, { ...options }),

  loading: (message = "Loading...", options = {}) =>
    toast.loading(message, { ...options }),
};
