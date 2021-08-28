from typing import Dict

# The rest of the codebase uses storoshis everywhere.
# Only use these units for user facing interfaces.
units: Dict[str, int] = {
    "stor": 10 ** 12,  # 1 stor (STOR) is 1,000,000,000,000 storoshi (1 trillion)
    "storoshi:": 1,
    "colouredcoin": 10 ** 3,  # 1 coloured coin is 1000 colouredcoin storoshis
}
