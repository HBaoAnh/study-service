import axios from 'axios';


const config = () => {
    const token = localStorage.getItem("_token");
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        Authorization: `Bearer ${token}`,
    };
    return headers;
};

const formConfig = () => {
    const token = localStorage.getItem("_token");
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        Authorization: `Bearer ${token}`,
    };
    return headers;
};

class AxiosService {
    get = (url, type, timeOut) =>
        this.doRequest("GET", url, '', type, timeOut);

    post = (url, data, type, timeOut) =>
        this.doRequest("POST", url, data, type, timeOut);

    delete = (url, type, timeOut) =>
        this.doRequest("DELETE", url, '', type, timeOut);


    doRequest = (method, url, data, type, timeOut) => {
        let cusConfig = config();
        if (type === 'FORM') {
            cusConfig = formConfig();
        }
        if (process.env.NODE_ENV === 'production') {
            timeOut = 0;
        } else {
            timeOut = 0;
        }
        return axios({
            method,
            url,
            data,
            headers: cusConfig,
            timeout: timeOut,
          
        })
            .then((res) => res)
            .catch((err) => {
                const resp = err.response;

                if (!resp) {
                    return {
                        status: 503,
                        data: {
                            msg: 'Không kết nối được đến network',
                        },
                    };
                }

                switch (resp.status) {
                    case 404:
                    case 405:
                    case 503:
                    case 400: {
                        return resp;
                    }
                    case 401: {
                        localStorage.setItem("_token", '');
                        document.location.href = '/login';
                        return '';
                    }
                    case 801: {
                        return {
                            status: 801,
                            data: {
                                msg: 'Bạn không có quyền thực hiện chức năng này',
                            },
                        };
                    }
                    default:
                        return resp;
                }
            });
    };
}
export default new AxiosService();
