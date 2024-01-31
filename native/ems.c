#include "toolkit.h"
#include <emscripten/emscripten.h>

EMSCRIPTEN_KEEPALIVE
char* renderPassword(char* master, char* target, char* customCharset) {
	return spm_generatePassword(master, target, customCharset);
}
