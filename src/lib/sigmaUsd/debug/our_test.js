import { SConstant } from "@fleet-sdk/serializer";

import {
	ErgoAddress,
	OutputBuilder,
	RECOMMENDED_MIN_FEE_VALUE,
	SAFE_MIN_BOX_VALUE,
	SByte,
	SColl,
	SLong,
	TransactionBuilder,
} from "@fleet-sdk/core";

export {
	SBigInt,
	SBool,
	SByte,
	SColl,
	SCollType,
	SGroupElement,
	SInt,
	SLong,
	SShort,
	SSigmaProp,
	SType,
	SUnit,
	DataSerializer,
} from "@fleet-sdk/serializer";

const ourBankVal = 1428400863902146;
const sigmaBankVal = 1428400863903166;

const ourBankR5 = "05d683d9af13";
const sigmaBankR5 = "0586a6d9af13";

const ourReceptR5 = "05a8d7c98004";
const sigmaReceptR5 = "05a0e7c98004";

const dif = (ourBankVal - sigmaBankVal) / 10 ** 9;
// const sReader = new SigmaReader();     ////  SigmaReader("0586a6d9af13").readLong()

console.log("--------SigmaUSD.IO--------");
console.log("ERG:", sigmaBankVal);
console.log("R4:", SConstant.from("05aeea8b2f").data);
console.log("R5:", SConstant.from(sigmaBankR5).data);

console.log("----------OUR----------");
console.log("ERG:", ourBankVal);
console.log("R4:", SConstant.from("05aeea8b2f").data);
console.log("R5:", SConstant.from(ourBankR5).data);

console.log("Recept Box");
console.log("R5 Sigma:", SConstant.from(sigmaReceptR5).data);
console.log("R5 Our  :", SConstant.from(ourReceptR5).data);
console.log(
	"R5 delta  :",
	((BigInt(SConstant.from(ourReceptR5).data) -
		BigInt(SConstant.from(sigmaReceptR5).data)) *
		10_000_000n) /
		BigInt(SConstant.from(ourReceptR5).data)
);

console.log("----DELTA-----");
console.log(ourBankVal - sigmaBankVal);

//05f8c9acbb07

console.log(2600149227n == 2600149227n);
//"value": "1428450385872562", // <----------

// "additionalRegisters": {
//     "R4": "05aeea8b2f",
//     "R5": "0586a6d9af13" // <---------
// }

// "value": "27234209"
