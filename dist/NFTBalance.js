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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNFTBalance = void 0;
const node_1 = __importDefault(require("moralis/node"));
const utils_1 = require("./utils");
function getNFTBalance(userAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, utils_1.initializeServer)();
        const NFTs = yield node_1.default.Web3API.account.getNFTs({ address: userAddress });
        return NFTs;
    });
}
exports.getNFTBalance = getNFTBalance;
//# sourceMappingURL=NFTBalance.js.map