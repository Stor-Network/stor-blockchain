from typing import KeysView, Generator

SERVICES_FOR_GROUP = {
    "all": "stor_harvester stor_timelord_launcher stor_timelord stor_farmer stor_full_node stor_wallet".split(),
    "node": "stor_full_node".split(),
    "harvester": "stor_harvester".split(),
    "farmer": "stor_harvester stor_farmer stor_full_node stor_wallet".split(),
    "farmer-no-wallet": "stor_harvester stor_farmer stor_full_node".split(),
    "farmer-only": "stor_farmer".split(),
    "timelord": "stor_timelord_launcher stor_timelord stor_full_node".split(),
    "timelord-only": "stor_timelord".split(),
    "timelord-launcher-only": "stor_timelord_launcher".split(),
    "wallet": "stor_wallet stor_full_node".split(),
    "wallet-only": "stor_wallet".split(),
    "introducer": "stor_introducer".split(),
    "simulator": "stor_full_node_simulator".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())
