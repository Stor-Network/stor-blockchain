from dataclasses import dataclass
from typing import Dict, List, Tuple

from stor.types.blockchain_format.sized_bytes import bytes32
from stor.types.condition_with_args import ConditionWithArgs
from stor.util.condition_tools import ConditionOpcode
from stor.util.streamable import Streamable, streamable


@dataclass(frozen=True)
@streamable
class NPC(Streamable):
    coin_name: bytes32
    puzzle_hash: bytes32
    conditions: List[Tuple[ConditionOpcode, List[ConditionWithArgs]]]

    @property
    def condition_dict(self):
        d: Dict[ConditionOpcode, List[ConditionWithArgs]] = {}
        for opcode, l in self.conditions:
            d[opcode] = l
        return d
