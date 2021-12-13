from dataclasses import dataclass

from blspy import G2Element
from stor.types.blockchain_format.proof_of_space import ProofOfSpace
from stor.types.blockchain_format.sized_bytes import bytes32
from stor.util.ints import uint64
from stor.util.streamable import streamable, Streamable


@dataclass(frozen=True)
@streamable
class PartialPayload(Streamable):
    proof_of_space: ProofOfSpace
    sp_hash: bytes32
    end_of_sub_slot: bool
    payout_address: str  # The farmer can choose where to send the rewards. This can take a few minutes


@dataclass(frozen=True)
@streamable
class SubmitPartial(Streamable):
    payload: PartialPayload
    partial_aggregate_signature: G2Element  # Sig of partial by plot key and pool key
    difficulty: uint64
