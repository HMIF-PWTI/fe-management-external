"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchKegiatans = void 0;
const axios_1 = require("axios");
const fetchKegiatans = async (laravelApiUrl) => {
    return axios_1.default.get(`${laravelApiUrl}/api/v1/kegiatans`, {
        timeout: 8_000,
        validateStatus: () => true,
    });
};
exports.fetchKegiatans = fetchKegiatans;
//# sourceMappingURL=kegiatan.service.js.map