import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("STOR_ROOT", "~/.stor/mainnet"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("STOR_KEYS_ROOT", "~/.stor_keys"))).resolve()
