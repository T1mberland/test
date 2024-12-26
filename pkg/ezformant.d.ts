/* tslint:disable */
/* eslint-disable */
export function process_audio(data: Float32Array): Float32Array;
export function lpc_filter_freq_response_with_downsampling(original_data: Float64Array, lpc_order: number, original_sample_rate: number, downsample_factor: number, num_points: number): Float64Array;
export function lpc_filter_freq_response(data: Float64Array, lpc_order: number, sample_rate: number, num_points: number): Float64Array;
export function lpc_filter_freq_response_with_peaks(data: Float64Array, lpc_order: number, sample_rate: number, num_points: number): Float64Array;
export function formant_detection(data: Float64Array, lpc_order: number, sample_rate: number): Float64Array;
export function formant_detection_with_downsampling(original_data: Float64Array, lpc_order: number, original_sample_rate: number, downsample_factor: number): Float64Array;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly process_audio: (a: number, b: number) => [number, number];
  readonly lpc_filter_freq_response_with_downsampling: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number];
  readonly lpc_filter_freq_response: (a: number, b: number, c: number, d: number, e: number) => [number, number];
  readonly lpc_filter_freq_response_with_peaks: (a: number, b: number, c: number, d: number, e: number) => [number, number];
  readonly formant_detection: (a: number, b: number, c: number, d: number) => [number, number];
  readonly formant_detection_with_downsampling: (a: number, b: number, c: number, d: number, e: number) => [number, number];
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
