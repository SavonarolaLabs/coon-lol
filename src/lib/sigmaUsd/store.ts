import { getBankBox, getOracleBox } from "$lib/getOracleBox";
import type { Box } from "@fleet-sdk/core";
import { writable, type Writable } from "svelte/store";

export const usd_erg_oracle_box: Writable<any> = writable();
export const sigma_usd_bank_box: Writable<any> = writable();
//export const rate_rsv_per_nano_erg: Writable<Number> = writable(0);
//export const rate_usd_cent_per_nano_erg: Writable<Number> = writable(0);

export async function initSigmaUsdStore(){
    const oracle_box = await getOracleBox();
    usd_erg_oracle_box.set(oracle_box);

    const bank_box = await getBankBox();
    sigma_usd_bank_box.set(bank_box);
}