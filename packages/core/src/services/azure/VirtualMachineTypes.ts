/*
 * © 2020 ThoughtWorks, Inc. All rights reserved.
 */

import { COMPUTE_PROCESSOR_TYPES } from '../../domain/ComputeProcessorTypes'

export const VIRTUAL_MACHINE_TYPE_VCPU_MAPPING: {
  [instanceType: string]: number
} = {
  'A1 v2': 1,
  'A2 v2': 2,
  'A2m v2': 2,
  'A4 v2': 4,
  'A4m v2': 4,
  'A8 v2': 8,
  'A8m v2': 8,
  B1LS: 1,
  B1S: 1,
  B1MS: 1,
  B2S: 2,
  B2MS: 2,
  B4MS: 4,
  B8MS: 8,
  B12MS: 12,
  B16MS: 16,
  B20MS: 20,
  'D2a v4': 2,
  'D4a v4': 4,
  'D8a v4': 8,
  'D16a v4': 16,
  'D32a v4': 32,
  'D48a v4': 48,
  'D64a v4': 64,
  'D96a v4': 96,
  'D2as v4': 2,
  'D4as v4': 4,
  'D8as v4': 8,
  'D16as v4': 16,
  'D32as v4': 32,
  'D48as v4': 48,
  'D64as v4': 64,
  'D96as v4': 96,
  'D2d v4': 2,
  'D4d v4': 4,
  'D8d v4': 8,
  'D16d v4': 16,
  'D32d v4': 32,
  'D48d v4': 48,
  'D64d v4': 64,
  'D2ds v4': 2,
  'D4ds v4': 4,
  'D8ds v4': 8,
  'D16ds v4': 16,
  'D32ds v4': 32,
  'D48ds v4': 48,
  'D64ds v4': 64,
  'D2 v4': 2,
  'D4 v4': 4,
  'D8 v4': 8,
  'D16 v4': 16,
  'D32 v4': 32,
  'D48 v4': 48,
  'D64 v4': 64,
  'D2s v4': 2,
  'D4s v4': 4,
  'D8s v4': 8,
  'D16s v4': 16,
  'D32s v4': 32,
  'D48s v4': 48,
  'D64s v4': 64,
  'D2 v3': 2,
  'D4 v3': 4,
  'D8 v3': 8,
  'D16 v3': 16,
  'D32 v3': 32,
  'D48 v3': 48,
  'D64 v3': 64,
  'D2s v3': 2,
  'D4s v3': 4,
  'D8s v3': 8,
  'D16s v3': 16,
  'D32s v3': 32,
  'D48s v3': 48,
  'D64s v3': 64,
  'D1 v2': 1,
  'D2 v2': 2,
  'D3 v2': 4,
  'D4 v2': 8,
  'D5 v2': 16,
  'DS1 v2': 1,
  'DS2 v2': 2,
  'DS3 v2': 4,
  'DS4 v2': 8,
  'DS5 v2': 16,
  DC2s: 2,
  DC4s: 4,
  'DC1s v2': 1,
  'DC2s v2': 2,
  'DC4s v2': 4,
  'DC8 v2': 8,
  'F2s v2': 2,
  'F4s v2': 4,
  'F8s v2': 8,
  'F16s v2': 16,
  'F32s v2': 32,
  'F48s v2': 48,
  'F64s v2': 64,
  'F72s v2': 72,
  F1: 1,
  F2: 2,
  F4: 4,
  F8: 8,
  F16: 16,
  F1s: 1,
  F2s: 2,
  F4s: 4,
  F8s: 8,
  F16s: 16,
  'E2a v4': 2,
  'E4a v4': 4,
  'E8a v4': 8,
  'E16a v4': 16,
  'E20a v4': 20,
  'E32a v4': 32,
  'E48a v4': 48,
  'E64a v4': 64,
  'E96a v4': 96,
  'E2as v4': 2,
  'E4as v4': 4,
  'E8as v4': 8,
  'E16as v4': 16,
  'E20as v4': 20,
  'E32as v4': 32,
  'E48as v4': 48,
  'E64as v4': 64,
  'E96as v4': 96,
  'E2d v4': 2,
  'E4d v4': 4,
  'E8d v4': 8,
  'E16d v4': 16,
  'E20d v4': 20,
  'E32d v4': 32,
  'E48d v4': 48,
  'E64d v4': 64,
  'E2ds v4': 2,
  'E4ds v4': 4,
  'E8ds v4': 8,
  'E16ds v4': 16,
  'E20ds v4': 20,
  'E32ds v4': 32,
  'E48ds v4': 48,
  'E64ds v4': 64,
  'E80ids v4': 80,
  'E2 v4': 2,
  'E4 v4': 4,
  'E8 v4': 8,
  'E16 v4': 16,
  'E32 v4': 32,
  'E48 v4': 48,
  'E64 v4': 64,
  'E2s v4': 2,
  'E4s v4': 4,
  'E8s v4': 8,
  'E16s v4': 16,
  'E20s v4': 20,
  'E32s v4': 32,
  'E48s v4': 48,
  'E64s v4': 64,
  'E80is v4': 80,
  'E2 v3': 2,
  'E4 v3': 4,
  'E8 v3': 8,
  'E16 v3': 16,
  'E20 v3': 20,
  'E32 v3': 32,
  'E48 v3': 48,
  'E64i v3': 64,
  'E64 v3': 64,
  'E2s v3': 2,
  'E4s v3': 4,
  'E8s v3': 8,
  'E16s v3': 16,
  'E20s v3': 20,
  'E32s v3': 32,
  'E48s v3': 48,
  'E64is v3': 64,
  'E64s v3': 64,
  'D11 v2': 2,
  'D12 v2': 4,
  'D13 v2': 8,
  'D14 v2': 16,
  'D15i v2': 20,
  'D15 v2': 20,
  'DS11 v2': 2,
  'DS12 v2': 4,
  'DS13 v2': 8,
  'DS14 v2': 16,
  'DS15i v2': 20,
  'DS15 v2': 20,
  G1: 2,
  G2: 4,
  G3: 8,
  G4: 16,
  G5: 32,
  Gs1: 2,
  Gs2: 4,
  Gs3: 8,
  Gs4: 16,
  Gs5: 32,
  M8ms: 8,
  M16ms: 16,
  M32ts: 32,
  M32ls: 32,
  M32ms: 32,
  M64ls: 64,
  M64s: 64,
  M64: 64,
  M64ms: 64,
  M64m: 64,
  M128s: 128,
  M128: 128,
  M128ms: 128,
  M128m: 128,
  'M32dms v2': 32,
  'M64ds v2': 64,
  'M64dms v2': 64,
  'M128ds v2': 128,
  'M128dms v2': 128,
  'M192ids v2': 192,
  'M192idms v2': 192,
  'M32ms v2': 32,
  'M64s v2': 64,
  'M64ms v2': 64,
  'M128s v2': 128,
  'M128ms v2': 128,
  'M192is v2': 192,
  'M192ims v2': 192,
  'M208s v2': 208,
  'M208ms v2': 208,
  'M416s v2': 416,
  'M416ms v2': 416,
  'DS11-1 v2': 1,
  'DS12-1 v2': 1,
  'DS12-2 v2': 2,
  'E4-2as v4': 2,
  'E4-2ds v4': 2,
  'E4-2s v3': 2,
  'E4-2s v4': 2,
  'DS13-2 v2': 2,
  'E8-2as v4': 2,
  'E8-2ds v4': 2,
  'E8-2s v3': 2,
  'E8-2s v4': 2,
  'M8-2ms': 2,
  'DS13-4 v2': 4,
  'E8-4as v4': 4,
  'E8-4ds v4': 4,
  'E8-4s v3': 4,
  'E8-4s v4': 4,
  'DS14-4 v2': 4,
  'E16-4as v4': 4,
  'E16-4ds v4': 4,
  'E16-4s v3': 4,
  'E16-4s v4': 4,
  'M8-4ms': 4,
  'Gs4-4': 4,
  'M16-4ms': 4,
  'DS14-8 v2': 8,
  'E16-8as v4': 8,
  'E16-8ds v4': 8,
  'E16-8s v3': 8,
  'E16-8s v4': 8,
  'Gs4-8': 8,
  'E32-8as v4': 8,
  'E32-8ds v4': 8,
  'E32-8s v3': 8,
  'E32-8s v4': 8,
  'M16-8ms': 8,
  'Gs5-8': 8,
  'M32-8ms': 8,
  'E32-16as v4': 16,
  'E32-16ds v4': 16,
  'E32-16s v3': 16,
  'E32-16s v4': 16,
  'E64-16s v3': 16,
  'Gs5-16': 16,
  'E64-16ds v4': 16,
  'E64-16s v4': 16,
  'E64-16as v4': 16,
  'M32-16ms': 16,
  'M64-16ms': 16,
  'E96-24as v4': 24,
  'E64-32s v3': 32,
  'E64-32ds v4': 32,
  'E64-32s v4': 32,
  'E64-32as v4': 32,
  'M64-32ms': 32,
  'M128-32ms': 32,
  'E96-48as v4': 48,
  'M128-64ms': 64,
  'L8s v2': 8,
  'L16s v2': 16,
  'L32s v2': 32,
  'L48s v2': 48,
  'L64s v2': 64,
  'L80s v2': 80,
  L4s: 4,
  L8s: 8,
  L16s: 16,
  L32s: 32,
  NC6: 6,
  NC12: 12,
  NC24r: 24,
  NC24: 24,
  'NC6 Promo': 6,
  'NC12 Promo': 12,
  'NC24 Promo': 24,
  'NC24r Promo': 24,
  'NC6s v2': 6,
  'NC12s v2': 12,
  'NC24rs v2': 24,
  'NC24s v2': 24,
  'NC6s v3': 6,
  'NC12s v3': 12,
  'NC24rs v3': 24,
  'NC24s v3': 24,
  'NC4as T4 v3': 4,
  'NC8as T4 v3': 8,
  'NC16as T4 v3': 16,
  'NC64as T4 v3': 64,
  NP10s: 10,
  NP20s: 20,
  NP40s: 40,
  NV6: 6,
  NV12: 12,
  NV24: 24,
  'NV12s v3': 12,
  'NV24s v3': 24,
  'NV48s v3': 48,
  ND6s: 6,
  ND12s: 12,
  ND24rs: 24,
  ND24s: 24,
  'ND40rs v2': 40,
  'ND96asr A100 v4': 96,
  H8: 8,
  H8m: 8,
  H16r: 16,
  H16: 16,
  H16mr: 16,
  H16m: 16,
  'H8 Promo': 8,
  'H8m Promo': 8,
  'H16 Promo': 16,
  'H16r Promo': 16,
  'H16m Promo': 16,
  'H16mr Promo': 16,
  HB60rs: 60,
  'HB120rs v2': 120,
  HC44rs: 44,
}

const cascadeLakeSkylakeBroadwellHaswell = [
  COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE,
  COMPUTE_PROCESSOR_TYPES.SKYLAKE,
  COMPUTE_PROCESSOR_TYPES.BROADWELL,
  COMPUTE_PROCESSOR_TYPES.HASWELL,
]

const cascadeLakeSkylake = [
  COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE,
  COMPUTE_PROCESSOR_TYPES.SKYLAKE,
]

const cascadeLakeSkylakeBroadwell = [
  COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE,
  COMPUTE_PROCESSOR_TYPES.SKYLAKE,
  COMPUTE_PROCESSOR_TYPES.BROADWELL,
]

const cascadeLakeHaswell = [
  COMPUTE_PROCESSOR_TYPES.HASWELL,
  COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE,
]

export const INSTANCE_TYPE_COMPUTE_PROCESSOR_MAPPING: {
  [series: string]: string[]
} = {
  'A1 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'A2 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'A2m v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'A4 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'A4m v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'A8 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'A8m v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B1LS: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B1S: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B1MS: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B2S: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B2MS: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B4MS: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B8MS: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B12MS: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B16MS: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B20MS: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'D2a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D4a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D8a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D16a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D32a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D48a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D64a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D96a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D2as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D4as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D8as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D16as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D32as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D48as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D64as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D96as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D2d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D4d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D8d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D16d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D32d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D48d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D64d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D2ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D4ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D8ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D16ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D32ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D48ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D64ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D2 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D4 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D8 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D16 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D32 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D48 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D64 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D2s v4': cascadeLakeSkylakeBroadwellHaswell,
  'D4s v4': cascadeLakeSkylakeBroadwellHaswell,
  'D8s v4': cascadeLakeSkylakeBroadwellHaswell,
  'D16s v4': cascadeLakeSkylakeBroadwellHaswell,
  'D32s v4': cascadeLakeSkylakeBroadwellHaswell,
  'D48s v4': cascadeLakeSkylakeBroadwellHaswell,
  'D64s v4': cascadeLakeSkylakeBroadwellHaswell,
  'D2 v3': cascadeLakeSkylakeBroadwellHaswell,
  'D4 v3': cascadeLakeSkylakeBroadwellHaswell,
  'D8 v3': cascadeLakeSkylakeBroadwellHaswell,
  'D16 v3': cascadeLakeSkylakeBroadwellHaswell,
  'D32 v3': cascadeLakeSkylakeBroadwellHaswell,
  'D48 v3': cascadeLakeSkylakeBroadwellHaswell,
  'D64 v3': cascadeLakeSkylakeBroadwellHaswell,
  'D2s v3': cascadeLakeSkylakeBroadwellHaswell,
  'D4s v3': cascadeLakeSkylakeBroadwellHaswell,
  'D8s v3': cascadeLakeSkylakeBroadwellHaswell,
  'D16s v3': cascadeLakeSkylakeBroadwellHaswell,
  'D32s v3': cascadeLakeSkylakeBroadwellHaswell,
  'D48s v3': cascadeLakeSkylakeBroadwellHaswell,
  'D64s v3': cascadeLakeSkylakeBroadwellHaswell,
  'D1 v2': cascadeLakeSkylakeBroadwellHaswell,
  'D2 v2': cascadeLakeSkylakeBroadwellHaswell,
  'D3 v2': cascadeLakeSkylakeBroadwellHaswell,
  'D4 v2': cascadeLakeSkylakeBroadwellHaswell,
  'D5 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS1 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS2 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS3 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS4 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS5 v2': cascadeLakeSkylakeBroadwellHaswell,
  DC2s: [COMPUTE_PROCESSOR_TYPES.COFFEE_LAKE],
  DC4s: [COMPUTE_PROCESSOR_TYPES.COFFEE_LAKE],
  'DC1s v2': [COMPUTE_PROCESSOR_TYPES.COFFEE_LAKE],
  'DC2s v2': [COMPUTE_PROCESSOR_TYPES.COFFEE_LAKE],
  'DC4s v2': [COMPUTE_PROCESSOR_TYPES.COFFEE_LAKE],
  'DC8 v2': [COMPUTE_PROCESSOR_TYPES.COFFEE_LAKE],
  'F2s v2': cascadeLakeSkylake,
  'F4s v2': cascadeLakeSkylake,
  'F8s v2': cascadeLakeSkylake,
  'F16s v2': cascadeLakeSkylake,
  'F32s v2': cascadeLakeSkylake,
  'F48s v2': cascadeLakeSkylake,
  'F64s v2': cascadeLakeSkylake,
  'F72s v2': cascadeLakeSkylake,
  F1: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  F2: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  F4: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  F8: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  F16: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  F1s: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  F2s: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  F4s: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  F8s: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  F16s: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E2a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E4a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E8a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E16a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E20a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E32a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E48a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E64a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E96a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E2as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E4as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E8as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E16as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E20as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E32as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E48as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E64as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E96as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E2d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E4d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E8d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E16d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E20d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E32d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E48d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E64d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E2ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E4ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E8ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E16ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E20ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E32ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E48ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E64ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E80ids v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E2 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E4 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E8 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E16 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E32 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E48 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E64 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E2s v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E4s v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E8s v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E16s v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E20s v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E32s v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E48s v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E64s v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E80is v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E2 v3': cascadeLakeSkylakeBroadwell,
  'E4 v3': cascadeLakeSkylakeBroadwell,
  'E8 v3': cascadeLakeSkylakeBroadwell,
  'E16 v3': cascadeLakeSkylakeBroadwell,
  'E20 v3': cascadeLakeSkylakeBroadwell,
  'E32 v3': cascadeLakeSkylakeBroadwell,
  'E48 v3': cascadeLakeSkylakeBroadwell,
  'E64i v3': cascadeLakeSkylakeBroadwell,
  'E64 v3': cascadeLakeSkylakeBroadwell,
  'E2s v3': cascadeLakeSkylakeBroadwell,
  'E4s v3': cascadeLakeSkylakeBroadwell,
  'E8s v3': cascadeLakeSkylakeBroadwell,
  'E16s v3': cascadeLakeSkylakeBroadwell,
  'E20s v3': cascadeLakeSkylakeBroadwell,
  'E32s v3': cascadeLakeSkylakeBroadwell,
  'E48s v3': cascadeLakeSkylakeBroadwell,
  'E64is v3': cascadeLakeSkylakeBroadwell,
  'E64s v3': cascadeLakeSkylakeBroadwell,
  'D11 v2': cascadeLakeSkylakeBroadwellHaswell,
  'D12 v2': cascadeLakeSkylakeBroadwellHaswell,
  'D13 v2': cascadeLakeSkylakeBroadwellHaswell,
  'D14 v2': cascadeLakeSkylakeBroadwellHaswell,
  'D15i v2': cascadeLakeSkylakeBroadwellHaswell,
  'D15 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS11 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS12 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS13 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS14 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS15i v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS15 v2': cascadeLakeSkylakeBroadwellHaswell,
  G1: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  G2: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  G3: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  G4: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  G5: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  Gs1: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  Gs2: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  Gs3: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  Gs4: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  Gs5: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  M8ms: cascadeLakeHaswell,
  M16ms: cascadeLakeHaswell,
  M32ts: cascadeLakeHaswell,
  M32ls: cascadeLakeHaswell,
  M32ms: cascadeLakeHaswell,
  M64ls: cascadeLakeHaswell,
  M64s: cascadeLakeHaswell,
  M64: cascadeLakeHaswell,
  M64ms: cascadeLakeHaswell,
  M64m: cascadeLakeHaswell,
  M128s: cascadeLakeHaswell,
  M128: cascadeLakeHaswell,
  M128ms: cascadeLakeHaswell,
  M128m: cascadeLakeHaswell,
  'M32dms v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M64ds v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M64dms v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M128ds v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M128dms v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M192ids v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M192idms v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M32ms v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M64s v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M64ms v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M128s v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M128ms v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M192is v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M192ims v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M208s v2': [COMPUTE_PROCESSOR_TYPES.SKYLAKE],
  'M208ms v2': [COMPUTE_PROCESSOR_TYPES.SKYLAKE],
  'M416s v2': [COMPUTE_PROCESSOR_TYPES.SKYLAKE],
  'M416ms v2': [COMPUTE_PROCESSOR_TYPES.SKYLAKE],
  'DS11-1 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'DS12-1 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'DS12-2 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E4-2as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E4-2ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E4-2s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E4-2s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'DS13-2 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E8-2as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E8-2ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E8-2s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E8-2s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M8-2ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'DS13-4 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E8-4as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E8-4ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E8-4s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E8-4s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'DS14-4 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E16-4as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E16-4ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E16-4s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E16-4s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M8-4ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'Gs4-4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M16-4ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'DS14-8 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E16-8as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E16-8ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E16-8s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E16-8s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'Gs4-8': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E32-8as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E32-8ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E32-8s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E32-8s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M16-8ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'Gs5-8': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M32-8ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E32-16as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E32-16ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E32-16s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E32-16s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E64-16s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'Gs5-16': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E64-16ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E64-16s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E64-16as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M32-16ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M64-16ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E96-24as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E64-32s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E64-32ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E64-32s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E64-32as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M64-32ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M128-32ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E96-48as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M128-64ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'L8s v2': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN],
  'L16s v2': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN],
  'L32s v2': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN],
  'L48s v2': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN],
  'L64s v2': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN],
  'L80s v2': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN],
  L4s: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  L8s: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  L16s: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  L32s: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  NC6: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  NC12: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  NC24r: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  NC24: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'NC6 Promo': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'NC12 Promo': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'NC24 Promo': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'NC24r Promo': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'NC6s v2': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC12s v2': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC24rs v2': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC24s v2': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC6s v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC12s v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC24rs v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC24s v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC4as T4 v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC8as T4 v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC16as T4 v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC64as T4 v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  NP10s: [COMPUTE_PROCESSOR_TYPES.GPU],
  NP20s: [COMPUTE_PROCESSOR_TYPES.GPU],
  NP40s: [COMPUTE_PROCESSOR_TYPES.GPU],
  NV6: [COMPUTE_PROCESSOR_TYPES.GPU],
  NV12: [COMPUTE_PROCESSOR_TYPES.GPU],
  NV24: [COMPUTE_PROCESSOR_TYPES.GPU],
  'NV12s v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NV24s v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NV48s v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  ND6s: [COMPUTE_PROCESSOR_TYPES.GPU],
  ND12s: [COMPUTE_PROCESSOR_TYPES.GPU],
  ND24rs: [COMPUTE_PROCESSOR_TYPES.GPU],
  ND24s: [COMPUTE_PROCESSOR_TYPES.GPU],
  'ND40rs v2': [COMPUTE_PROCESSOR_TYPES.GPU],
  'ND96asr A100 v4': [COMPUTE_PROCESSOR_TYPES.GPU],
  H8: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  H8m: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  H16r: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  H16: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  H16mr: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  H16m: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  'H8 Promo': [COMPUTE_PROCESSOR_TYPES.HASWELL],
  'H8m Promo': [COMPUTE_PROCESSOR_TYPES.HASWELL],
  'H16 Promo': [COMPUTE_PROCESSOR_TYPES.HASWELL],
  'H16r Promo': [COMPUTE_PROCESSOR_TYPES.HASWELL],
  'H16m Promo': [COMPUTE_PROCESSOR_TYPES.HASWELL],
  'H16mr Promo': [COMPUTE_PROCESSOR_TYPES.HASWELL],
  HB60rs: [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN],
  'HB120rs v2': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  HC44rs: [COMPUTE_PROCESSOR_TYPES.SKYLAKE],
}
