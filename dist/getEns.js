"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEns = void 0;
const NFTBalance_1 = require("./NFTBalance");
function getEns(address) {
    return __awaiter(this, void 0, void 0, function* () {
        const allNFTs = yield (0, NFTBalance_1.getNFTBalance)(address);
        // You can use find to get the first match, or filter to get all of the ens names
        const ensNames = allNFTs.result.filter((items) => items.name === "Ethereum Name Service");
        const metadata = [];
        ensNames.map((e) => {
            const ensData = JSON.parse(e.metadata);
            metadata.push(ensData.name);
        });
        return metadata;
    });
}
exports.getEns = getEns;
//# sourceMappingURL=getEns.js.map