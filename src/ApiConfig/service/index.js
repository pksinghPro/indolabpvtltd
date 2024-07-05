import axios from "axios";
import Apiconfigs from "../ApiConfig";
import { getContract } from "src/utils";
import moment from "moment";
import { toast } from "react-hot-toast";

export const getPerticularData = async (endPoint) => {
  try {
    const res = await axios({
      method: "GET",
      url: Apiconfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
    });
    if (res.data.responseCode === 200) {
      return res.data.result;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);

    return;
  }
};

export const postAPIHandle = async (endPoint, data) => {
  try {
    const res = await axios({
      method: "POST",
      url: Apiconfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
      data: data,
    });
    console.log("res----", res);
    if (res.data.responseCode === 200) {
      return res.data.result;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
    return;
  }
};
export const postAPIHandleWithId = async (endPoint, data) => {
  try {
    const res = await axios({
      method: "POST",
      url: Apiconfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
      data: data,
    });
    console.log("res----", res);
    if (res.data.responseCode === 200) {
      return res.data.result;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
    return;
  }
};

export const postAPIHandleWithToast = async (endPoint, data) => {
  try {
    const res = await axios({
      method: "POST",
      url: Apiconfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
      data: data,
    });
    if (res.data.responseCode === 200) {
      toast.success(res.data.responseMessage);
      return res.data.result;
    } else {
      return;
    }
  } catch (error) {
    toast.error(error.response.data.responseMessage);
    return;
  }
};

export const getAPIHandle = async (endPoint, data) => {
  try {
    const res = await axios({
      method: "GET",
      url: Apiconfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
    });
    if (res.data.responseCode === 200) {
      return res.data.result;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
    return;
  }
};

export const putAPIHandle = async (endPoint, data) => {
  try {
    const res = await axios({
      method: "PUT",
      url: Apiconfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
      data: data,
    });
    if (res.data.responseCode === 200) {
      return res.data.result;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getPerticularIdByPath = async (endPoint, _id) => {
  console.log("id---", _id);
  try {
    const res = await axios({
      method: "GET",
      url: `${Apiconfigs[endPoint]}/${_id}`,
      headers: {
        token: window.localStorage.getItem("token"),
      },
    });
    if (res.data.responseCode === 200) {
      return res.data.result;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);

    return;
  }
};

export const getPerticularIdByQuery = async (endPoint, _id) => {
  try {
    const res = await axios({
      method: "GET",
      url: Apiconfigs[endPoint],
      // headers: {
      //   token: window.localStorage.getItem("token"),
      // },
      params: _id,
    });
    if (res.data.responseCode === 200) {
      return res.data.result;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);

    return;
  }
};

export const getPerticularwithtokenIdByQuery = async (endPoint, data) => {
  try {
    const res = await axios({
      method: "GET",
      url: Apiconfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
      params: data,
    });
    if (res.data.responseCode === 200) {
      return res.data.result;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);

    return;
  }
};

export const likeDislike = async (endPoint, _id) => {
  try {
    const res = await axios({
      method: "GET",
      url: Apiconfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
      params: _id,
    });
    if (res.data.responseCode === 200) {
      toast.success(res.data.responseMessage);
      return res;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);

    return;
  }
};

export const uploadImageHandler = async (endPoint, image) => {
  const formDataImages = new FormData();
  formDataImages.append("image", image);

  try {
    const res = await axios({
      method: "POST",
      url: Apiconfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
      data: formDataImages,
    });
    console.log("res----", res);
    if (res.data.responseCode === 200) {
      return res.data.result;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

export const putAPIHandleWithToast = async (endPoint, data) => {
  try {
    const res = await axios({
      method: "PUT",
      url: Apiconfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
      data: data,
    });
    if (res.data.responseCode === 200) {
      toast.success(res.data.responseMessage);
      return res.data.result;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
    return;
  }
};
