import re

# redirect stdout to script-api.md
import sys

sys.stdout = open("spel2_declarations_unmodified.d.ts", "w")

header_files = [
    "../src/game_api/math.hpp",
    "../src/game_api/rpc.hpp",
    "../src/game_api/spawn_api.hpp",
    "../src/game_api/script.hpp",
    "../src/game_api/color.hpp",
    "../src/game_api/entity.hpp",
    "../src/game_api/movable.hpp",
    "../src/game_api/game_manager.hpp",
    "../src/game_api/state.hpp",
    "../src/game_api/state_structs.hpp",
    "../src/game_api/prng.hpp",
    "../src/game_api/entities_floors.hpp",
    "../src/game_api/entities_activefloors.hpp",
    "../src/game_api/entities_mounts.hpp",
    "../src/game_api/entities_monsters.hpp",
    "../src/game_api/entities_chars.hpp",
    "../src/game_api/entities_items.hpp",
    "../src/game_api/entities_fx.hpp",
    "../src/game_api/entities_liquids.hpp",
    "../src/game_api/entities_backgrounds.hpp",
    "../src/game_api/entities_decorations.hpp",
    "../src/game_api/entities_logical.hpp",
    "../src/game_api/sound_manager.hpp",
    "../src/game_api/render_api.hpp",
    "../src/game_api/particles.hpp",
    "../src/game_api/savedata.hpp",
    "../src/game_api/level_api.hpp",
    "../src/game_api/level_api_types.hpp",
    "../src/game_api/items.hpp",
    "../src/game_api/screen.hpp",
    "../src/game_api/screen_arena.hpp",
    "../src/game_api/online.hpp",
    "../src/game_api/strings.hpp",
    "../src/game_api/script/usertypes/level_lua.hpp",
    "../src/game_api/script/usertypes/gui_lua.hpp",
    "../src/game_api/script/usertypes/vanilla_render_lua.hpp",
    "../src/game_api/script/usertypes/save_context.hpp",
    "../src/game_api/script/usertypes/hitbox_lua.hpp",
    "../src/game_api/script/usertypes/socket_lua.hpp",
    "../src/imgui/imgui.h",
]
api_files = [
    "../src/game_api/script/script_impl.cpp",
    "../src/game_api/script/script_impl.hpp",
    "../src/game_api/script/lua_vm.cpp",
    "../src/game_api/script/lua_vm.hpp",
    "../src/game_api/script/lua_backend.cpp",
    "../src/game_api/script/lua_backend.hpp",
    "../src/game_api/script/usertypes/save_context.cpp",
    "../src/game_api/script/usertypes/state_lua.cpp",
    "../src/game_api/script/usertypes/prng_lua.cpp",
    "../src/game_api/script/usertypes/entity_lua.cpp",
    "../src/game_api/script/usertypes/entities_chars_lua.cpp",
    "../src/game_api/script/usertypes/entities_floors_lua.cpp",
    "../src/game_api/script/usertypes/entities_activefloors_lua.cpp",
    "../src/game_api/script/usertypes/entities_mounts_lua.cpp",
    "../src/game_api/script/usertypes/entities_monsters_lua.cpp",
    "../src/game_api/script/usertypes/entities_items_lua.cpp",
    "../src/game_api/script/usertypes/entities_fx_lua.cpp",
    "../src/game_api/script/usertypes/entities_liquids_lua.cpp",
    "../src/game_api/script/usertypes/entities_backgrounds_lua.cpp",
    "../src/game_api/script/usertypes/entities_decorations_lua.cpp",
    "../src/game_api/script/usertypes/entities_logical_lua.cpp",
    "../src/game_api/script/usertypes/particles_lua.cpp",
    "../src/game_api/script/usertypes/level_lua.cpp",
    "../src/game_api/script/usertypes/sound_lua.cpp",
    "../src/game_api/script/usertypes/player_lua.cpp",
    "../src/game_api/script/usertypes/gui_lua.cpp",
    "../src/game_api/script/usertypes/gui_lua.hpp",
    "../src/game_api/script/usertypes/vanilla_render_lua.cpp",
    "../src/game_api/script/usertypes/vanilla_render_lua.hpp",
    "../src/game_api/script/usertypes/drops_lua.cpp",
    "../src/game_api/script/usertypes/texture_lua.cpp",
    "../src/game_api/script/usertypes/flags_lua.cpp",
    "../src/game_api/script/usertypes/char_state_lua.cpp",
    "../src/game_api/script/usertypes/hitbox_lua.cpp",
    "../src/game_api/script/usertypes/screen_lua.cpp",
    "../src/game_api/script/usertypes/screen_arena_lua.cpp",
    "../src/game_api/script/usertypes/socket_lua.cpp",
]
rpc = []
classes = []
events = []
funcs = []
types = []
known_casts = []
aliases = []
lualibs = []
enums = []
replace = {
    #"nil": "void",
    #"bool": "boolean",
    "uint8_t": "number",
    "uint16_t": "number",
    "uint32_t": "number",
    "uint64_t": "number",
    "int8_t": "number",
    "int16_t": "number",
    "int32_t": "number",
    "int64_t": "number",
    "ImU32": "number",
    "vector": "Array",
    "array": "Array",
    "unordered_map": "LuaTable",
    "const char*": "string",
    "wstring": "string",
    "u16string": "string",
    "char16_t": "string",
    "string_view": "string",
    "pair": "tuple",
    "std::": "",
    "sol::": "",
    #"AABB&: const": "AABB",
    "function": "Callback",
    " = nullopt": "",
    #"const Color&": "color: Color",
    #"void": "",
    "constexpr": "",
    #"static": "",
    #"variadic_args va": "...ent_type: number[]",
    "...va:": "...ent_type:",
    "// Access via": "ImGuiIO",
    "set<": "Array<",
    "&": "",
    "const string": "string",

}
comment = []
not_functions = [
    "players",
    "state",
    "game_manager",
    "online",
    "savegame",
    "options",
    "meta",
    "prng",
]
skip = False


def getfunc(name):
    for func in funcs:
        if func["name"] == name:
            return func
    return False


def rpcfunc(name):
    ret = []
    for func in rpc:
        if func["name"] == name:
            ret.append(func)
    return ret

#old reArr: r"(Array<\w+), [^>]*?(>+)"
reArr = re.compile(r"(Array<(?:(?:\w*<\w*, \d>)|(?:\w+))), [^>]*?(>+)") #for removing the max size of arrays
reTuple = re.compile(r"tuple<(.*?)>")
reOptional = re.compile(r"optional<(.+?)>")
reBool = re.compile(r"bool\b")
reNumber = re.compile(r"\b(?:float|int)\b")
def replace_all(text, dic):
    for i, j in dic.items():
        pos = text.find(i)
        br2 = text.find('`', pos + len(i))
        br1 = text.rfind('`', 0, pos)
        if pos > 0 and br1 >= 0 and br2 > 0:
            continue
        text = text.replace(i, j)
    text = reNumber.sub("number", text)
    if "Array<" in text: #Array<Array<float, 2>, MAX_PLAYERS>
        newText = text
        while True:
            newText = reArr.sub(r"\1\2", text)#TODO Possible solution: use tuples to use the max size. bad thing: some arrays show max size as MAX_PLAYERS.
            if newText == text:
                break
            text = newText
        
    text = reTuple.sub(r"LuaMultiReturn<[\1]>", text)
    text = reBool.sub("boolean", text)
    text = reOptional.sub(r"\1 | undefined", text)
    #match = re.search(r"(Array<.*), .*>", text)
    #if match:
    #    text = text.replace(match.group(0), match.group(1) + ">")
    #else:
    #    match = re.search(r"tuple<(.*)>", text)
    #    if match:
    #       text = text.replace(match.group(0), f"[{match.group(1)}]")
    return text

reGetParam = re.compile(r"(?!const)(\b[^ ]+) *([^,]+),?")#r"([^ ]+) *([^,]+),?")
reRemoveDefault = re.compile(r" = .*")
reHandleConst = re.compile(r"const (\w+) (\w+)")
def cpp_params_to_typescript(params_text):
    return_text = ""
    params_iterator = reGetParam.finditer(params_text)
    for param_match in params_iterator:
        p_type = param_match.group(1)
        p_name = param_match.group(2)
        p_name = reRemoveDefault.sub("", p_name)
        if p_type == "sol::variadic_args":
            return_text += f"...{p_name}: any[], "
        else:
            if m := reHandleConst.match(p_name):
                p_type = m.group(1)
                p_name = m.group(2)
            return_text += f"{p_name}: {p_type}, "
    return return_text[0:-2]

reConstructorFix = re.compile(r"const (\w+)")
def fix_constructor_param(params_text):
    return reConstructorFix.sub(r"\1: \1", params_text)


def print_af(lf, af):
    if lf["comment"] and lf["comment"][0] == "NoDoc":
        return
    ret = replace_all(af["return"], replace) or "void"
    name = lf["name"]
    param = cpp_params_to_typescript(af["param"])
    param = replace_all(param, replace)
    #fun = f"{ret} {name}({param})".strip()
    fun = f"declare function {name}({param}) : {ret}".strip()
    #search_link = "https://github.com/spelunky-fyi/overlunky/search?l=Lua&q=" + name
    #print(f"### [`{name}`]({search_link})")
    if lf["comment"]:
        print("/** ")
        for com in lf["comment"]:
            print(com)
        print(" */")
    print(fun)
    #for com in lf["comment"]:
    #    print(com)


for file in header_files:
    comment = []
    data = open(file, "r").read().split("\n")
    skip = 0
    for line in data:
        line = line.replace("*", "")
        skip += line.count("{") - line.count("}")
        c = re.search(r"/// ?(.*)$", line)
        if c:
            comment.append(c.group(1))
        m = re.search(r"\s*(.*)\s+([^\(]*)\(([^\)]*)", line)
        if m:
            if skip == 0 or file.endswith("script.hpp"):
                rpc.append(
                    {
                        "return": m.group(1),
                        "name": m.group(2),
                        "param": m.group(3),
                        "comment": comment,
                    }
                )
        else:
            comment = []

for file in header_files:
    if file.endswith("script.hpp"):
        continue
    data = open(file, "r").read().split("\n")
    brackets_depth = 0
    in_union = False
    in_anonymous_struct = False
    class_name = None
    comment = []
    member_funs = {}
    member_vars = []
    for line in data:
        line = replace_all(line, replace)
        line = line.replace("*", "")
        if not class_name and ("struct" in line or "class" in line):
            m = re.match(r"(struct|class)\s+(\S+)", line)
            if m:
                class_name = m[2]
        elif class_name:
            prev_brackets_depth = brackets_depth
            brackets_depth += line.count("{") - line.count("}")

            if brackets_depth == 1:
                if line.strip() == "union":
                    in_union = True
            if brackets_depth == 2 and in_union:
                if line.strip() == "struct":
                    in_anonymous_struct = True

            if brackets_depth < prev_brackets_depth:
                if brackets_depth == 2:
                    in_anonymous_struct = False
                if brackets_depth == 1:
                    in_union = False

            if (
                brackets_depth == 1
                or (brackets_depth == 2 and in_union)
                or (brackets_depth == 3 and in_anonymous_struct)
            ):
                m = re.search(r"/// ?(.*)$", line)
                if m:
                    comment.append(m[1])
                else:
                    m = re.search(
                        r"^\s*:.*$", line
                    )  # skip lines that start with a colon (constructor parameter initialization)
                    if m:
                        continue

                    m = re.search(r"\s*(virtual\s)?(.*)\s+([^\(]*)\(([^\)]*)", line)
                    if m:
                        name = m[3]
                        # move ctor is useless for Lua
                        is_move_ctr = re.fullmatch(fr"\s*{name}\s*&&[^,]*", m[4]) and not m[2]
                        if not is_move_ctr:
                            if name not in member_funs:
                                member_funs[name] = []
                            member_funs[name].append(
                                {
                                    "return": m[2],
                                    "name": m[3],
                                    "param": m[4],
                                    "comment": comment,
                                }
                            )
                        comment = []

                    m = re.search(
                        r"\s*([^\;\{]*)\s+([^\;^\{}]*)\s*(\{[^\}]*\})?\;", line
                    )
                    if m:
                        member_vars.append(
                            {"type": m[1], "name": m[2], "comment": comment}
                        )
                        comment = []
            elif brackets_depth == 0:
                classes.append(
                    {
                        "name": class_name,
                        "member_funs": member_funs,
                        "member_vars": member_vars,
                    }
                )
                class_name = None
                comment = []
                member_funs = {}
                member_vars = []

for file in api_files:
    comment = []
    data = open(file, "r").read().split("\n")
    for line in data:
        line = line.replace("*", "")
        m = re.search(r'lua\[[\'"]([^\'"]*)[\'"]\];', line)
        if m:
            events.append({"name": m.group(1), "comment": comment})
        else:
            comment = []
        c = re.search(r"/// ?(.*)$", line)
        if c:
            comment.append(c.group(1))
        else:
            comment = []

for file in api_files:
    comment = []
    data = open(file, "r").read().split("\n")
    for line in data:
        line = line.replace("*", "")
        a = re.search(r'lua\[[\'"]([^\'"]*)[\'"]\]\s+=\s+(.*);', line)
        b = re.search(r'lua\[[\'"]([^\'"]*)[\'"]\]\s+=\s+(.*)$', line)
        if a and not a.group(1).startswith("__"):
            if not getfunc(a.group(1)):
                funcs.append(
                    {"name": a.group(1), "cpp": a.group(2), "comment": comment}
                )
            comment = []
        elif b and not b.group(1).startswith("__"):
            if not getfunc(b.group(1)):
                funcs.append(
                    {"name": b.group(1), "cpp": b.group(2), "comment": comment}
                )
            comment = []
        c = re.search(r"/// ?(.*)$", line)
        if c:
            comment.append(c.group(1))

for file in api_files:
    data = open(file, "r").read()
    data = data.replace("\n", "")
    data = re.sub(r" ", "", data)
    m = re.findall(r'new_usertype\<([^\>]*?)\>\s*\(\s*"([^"]*)",(.*?)\);', data)
    for type in m:
        cpp_type = type[0]
        name = type[1]
        attr = type[2]
        base = ""
        bm = re.search(r"sol::bases<([^\]]*)>", attr)
        if bm:
            base = bm.group(1)
        attr = attr.replace('",', ",")
        attr = attr.split('"')
        vars = []

        underlying_cpp_type = next(
            (item for item in classes if item["name"] == cpp_type), dict()
        )
        if "member_funs" not in underlying_cpp_type:
            continue # whatever, I'm not fixing this
            raise RuntimeError(
                "No member_funs found. Did you forget to include a header file at the top of the generate script?"
            )

        for var in attr:
            if not var:
                continue
            var = var.split(",")
            if var[0] == "sol::base_classes" or var[0] == "sol::no_constructor":
                continue
            if "table_of" in var[1]:
                var[1] = var[1].replace("table_of(", "") + "[]"
            if var[1].startswith("sol::readonly"):
                var[1] = var[1].replace("sol::readonly(", "")
                var[1] = var[1][:-1]
            if var[1].startswith("std::move"):
                var[1] = var[1].replace("std::move(", "")
                var[1] = var[1][:-1]

            var_name = var[0]
            cpp = var[1]
            cpp_name = cpp[cpp.find("::") + 2 :] if cpp.find("::") >= 0 else cpp

            if var[0].startswith("sol::constructors"):
                for fun in underlying_cpp_type["member_funs"][cpp_type]:
                    param = fun["param"]
                    if "const" in param:
                        param = fix_constructor_param(param)
                    elif param == fun["name"]:
                        continue
                    else:
                        param = cpp_params_to_typescript(param)
                    #sig = f"{cpp_type}({param})"
                    #Will be changed to ts later
                    sig = f"static {cpp_type} new({param})"
                    vars.append(
                        {
                            "name": cpp_type,
                            "type": "",
                            "signature": sig,
                            "comment": fun["comment"],
                        }
                    )
            elif cpp_name in underlying_cpp_type["member_funs"]:
                for fun in underlying_cpp_type["member_funs"][cpp_name]:
                    ret = fun["return"]
                    param = fun["param"]
                    param = cpp_params_to_typescript(param)
                    sig = f"{ret} {var_name}({param})"
                    vars.append(
                        {
                            "name": var_name,
                            "type": cpp,
                            "signature": sig,
                            "comment": fun["comment"],
                        }
                    )
            else:
                underlying_cpp_var = next(
                    (
                        item
                        for item in underlying_cpp_type["member_vars"]
                        if item["name"] == cpp_name
                    ),
                    dict(),
                )
                if underlying_cpp_var:
                    type = underlying_cpp_var["type"]
                    #sig = f"{type} {var_name}"
                    sig = f"{var_name}: {type}"
                    vars.append(
                        {
                            "name": var_name,
                            "type": cpp,
                            "signature": sig,
                            "comment": underlying_cpp_var["comment"],
                        }
                    )
                else:
                    vars.append({"name": var_name, "type": cpp})
        types.append({"name": name, "vars": vars, "base": base})

for file in api_files:
    with open(file) as fp:
        line = fp.readline()
        while line:
            m = re.search(r'lua\["Entity"\]\["(as_.*)"\]', line)
            if m != None:
                known_casts.append(m.group(1))
            line = fp.readline()
known_casts.sort()

for file in api_files:
    comment = []
    data = open(file, "r").read().split("\n")
    for line in data:
        line = line.replace("*", "")
        m = re.findall(r"new_usertype\<(.*?)\>", line)
        if m:
            type = m[0]
            type_to_mod = next((item for item in types if item["name"] == type), dict())
            if type_to_mod:
                type_to_mod["comment"] = comment
            comment = []
        if line == "":
            comment = []
        c = re.search(r"/// ?(.*)$", line)
        if c:
            comment.append(c.group(1))

#DELETED ENUM STUFF, we will get enums with spel2.lua
#TODO: get some enums that have comments, like ON or SPAWN_TYPE

for file in api_files:
    data = open(file, "r").read()
    data = data.replace("\n", "")
    data = re.sub(r" ", "", data)
    m = re.search(r"open_libraries\s*\(([^\)]*)\)", data)
    if m:
        libs = m.group(1).split(",")
        for lib in libs:
            lualibs.append(lib.replace("sol::lib::", ""))

data = open("../src/game_api/aliases.hpp", "r").read().split("\n")
for line in data:
    if not line.endswith("NoAlias"):
        m = re.search(r"using\s*(\S*)\s*=\s*(\S*)", line)
        if m:
            name = m.group(1)
            type = replace_all(m.group(2), replace)
            aliases.append({"name": name, "type": type})

#print("## Global variables")
#print("""These variables are always there to use.""")
#for lf in funcs:
#    
#    if lf["name"] in not_functions:
#        print(
#            "### [`"
#            + lf["name"]
#            + "`](https://github.com/spelunky-fyi/overlunky/search?l=Lua&q="
#            + lf["name"]
#            + ")"
#        )
#        for com in lf["comment"]:
#            print(com)

print(
    """/** @noSelfInFile */
declare interface Meta {
    name: string;
    version: string;
    description: string;
    author: string;
}
declare let meta: Meta;

declare const state: StateMemory;
declare const game_manager: GameManager;
declare const online: Online;
declare const players: Array<Player>;
declare const savegame: SaveData;
declare const options: any;
declare const prng: PRNG;
declare interface Callback {
    (...args: any[]): any;
}
declare interface SoundCallbackFunction extends Callback {}""" #make class with extends or type = Callback?
)

#deprecated_funcs = [
#    func for func in funcs if func["comment"] and func["comment"][0] == "Deprecated"
#]
funcs = [
    func
    for func in funcs
    if not func["comment"] or not func["comment"][0] == "Deprecated"
]

print("\n//## Functions\n")

for lf in funcs:
    if len(rpcfunc(lf["cpp"])):
        for af in rpcfunc(lf["cpp"]):
            print_af(lf, af)
    elif not (lf["name"].startswith("on_") or lf["name"] in not_functions):
        if lf["comment"] and lf["comment"][0] == "NoDoc":
            continue
        m = re.search(r"\(([^\{]*)\)\s*->\s*([^\{]*)", lf["cpp"])
        m2 = re.search(r"\(([^\{]*)\)", lf["cpp"])
        ret = "void"
        param = ""
        if m:
            ret = replace_all(m.group(2), replace).strip() or "void"
        if m or m2:
            param = (m or m2).group(1)
            param = cpp_params_to_typescript(param)
            param = replace_all(param, replace).strip()
        name = lf["name"]
        fun = f"declare function {name}({param}) : {ret}".strip()
        if lf["comment"]:
            print("/** ")
            for com in lf["comment"]:
                print(com)
            print(" */")
        print(fun)
        #for com in lf["comment"]:
        #    print(com)


#print("//## Deprecated Functions")
#print(
#    "//#### These functions still exist but their usage is discouraged, they all have alternatives mentioned here so please use those!"
#)
#
#for lf in events:
#    if lf["name"].startswith("on_"):
#        print(
#            "### [`"
#            + lf["name"]
#            + "`](https://github.com/spelunky-fyi/overlunky/search?l=Lua&q="
#            + lf["name"]
#            + ")"
#        )
#        for com in lf["comment"]:
#            print(com)
#
#for lf in deprecated_funcs:
#    lf["comment"].pop(0)
#    if len(rpcfunc(lf["cpp"])):
#        for af in rpcfunc(lf["cpp"]):
#            print_af(lf, af)
#    elif not (lf["name"].startswith("on_") or lf["name"] in not_functions):
#        if lf["comment"] and lf["comment"][0] == "NoDoc":
#            continue
#        m = re.search(r"\(([^\{]*)\)\s*->\s*([^\{]*)", lf["cpp"])
#        m2 = re.search(r"\(([^\{]*)\)", lf["cpp"])
#        ret = "nil"
#        param = ""
#        if m:
#            ret = replace_all(m.group(2), replace).strip() or "nil"
#        if m or m2:
#            param = (m or m2).group(1)
#            param = replace_all(param, replace).strip()
#        name = lf["name"]
#        fun = f"{ret} {name}({param})".strip()
#        search_link = "https://github.com/spelunky-fyi/overlunky/search?l=Lua&q=" + name
#        print(f"### [`{name}`]({search_link})")
#        print(f"`{fun}`<br/>")
#        for com in lf["comment"]:
#            print(com)

print("\n//## Types\n")
for type in types:
    print("declare class " + type["name"], end="")
    if type["base"]:
        bases = type["base"].split(",")
        print(" extends " + bases[-1], end="")
    print(" {")
    for var in type["vars"]:
        if "comment" in var and var["comment"]:
            print("/** ")
            for com in var["comment"]:
                print(com)
            print(" */")
        if "signature" in var:
            signature = var["signature"]
            m = re.search(r"\s*(.*)\s+([^\(]*)\(([^\)]*)", var["signature"])
            if m:
                ret = replace_all(m.group(1), replace) or "void"
                name = m.group(2)
                param = replace_all(m.group(3), replace)
                if ret.startswith("static"):
                    ret = re.sub(r"static +(\w+)", r"\1", ret)
                    name = "static " + name
                signature = name + "(" + param + "): " + ret
            signature = signature.strip()
            #print("has_sig")
            print("    " + signature)
        else:
            #print("not_sig_has")
            name = var["name"]
            if "->float" in var["type"]:
                print(f"    {name}: number")
            else:
                print(f"    {name}: any //unknown")
    print("}")

#print("//## Automatic casting of entities")
#for known_cast in known_casts:
#    print("- " + known_cast)

print("\n//## Enums\n")
enumStr = ""
data = open("./game_data/spel2.lua", "r", encoding="latin-1").read()
match_i = re.finditer(r"\n[A-Z_]+? = {\n(?! *__)[\s\S]+?\n}", data)

for match in match_i:
    enumStr += "\ndeclare enum " + match.group(0).replace("= {", "{")[1:]

print(enumStr)
#for type in enums:
#    print("### " + type["name"])
#    if "comment" in type:
#        for com in type["comment"]:
#            print(com)
#    for var in type["vars"]:
#        if var["name"]:
#            print(
#                "- [`"
#                + var["name"]
#                + "`](https://github.com/spelunky-fyi/overlunky/search?l=Lua&q="
#                + type["name"]
#                + "."
#                + var["name"]
#                + ") "
#                + var["type"]
#            )
#        else:
#            print("- " + var["type"])
#        if "docs" in var:
#            print(var["docs"])

#EXTRA THINGS
print(
"""//was made for fixing arrays of size MAX_PLAYERS, but since I removed the max size because TS doesn't have those, isn't needed
//declare const MAX_PLAYERS: 4

declare type in_port_t = number
declare class Logic {}
declare class Gamepad {
    enabled: boolean
    /**
    * Bitmask of the device digital buttons, as follows. A set bit indicates that the corresponding button is pressed.
    *
    * Device button	Bitmask:
    *
    * XINPUT_GAMEPAD_DPAD_UP	0x0001
    *
    * XINPUT_GAMEPAD_DPAD_DOWN	0x0002
    *
    * XINPUT_GAMEPAD_DPAD_LEFT	0x0004
    *
    * XINPUT_GAMEPAD_DPAD_RIGHT	0x0008
    *
    * XINPUT_GAMEPAD_START	0x0010
    *
    * XINPUT_GAMEPAD_BACK	0x0020
    *
    * XINPUT_GAMEPAD_LEFT_THUMB	0x0040
    *
    * XINPUT_GAMEPAD_RIGHT_THUMB	0x0080
    *
    * XINPUT_GAMEPAD_LEFT_SHOULDER	0x0100
    *
    * XINPUT_GAMEPAD_RIGHT_SHOULDER	0x0200
    *
    * XINPUT_GAMEPAD_A	0x1000
    *
    * XINPUT_GAMEPAD_B	0x2000
    *
    * XINPUT_GAMEPAD_X	0x4000
    *
    * XINPUT_GAMEPAD_Y	0x8000
    */
    buttons: number
    lt: number
    rt: number
    lx: number
    ly: number
    rx: number
    ry: number
}

declare type OnlinePlayerShort = any
declare type UdpServer = any
declare type Texture = any
declare type SpearDanglerAnimFrames = any
declare type OnlineLobbyScreenPlayer = any"""
)

print("\n//## Aliases\n")
print("declare type IMAGE = number")
for alias in aliases:
    name = alias["name"]
    type = alias["type"]
    #print(f"### {name} == {type}")
    print(f"declare type {name} = {type}")

#print(classes)

sys.stdout.close()
sys.stdout = sys.__stdout__

#Replace some things
final_replace_stuff = {
"""declare class ImVec2 {
    x: any //unknown
    y: number                                   x,
}""":
"""declare class ImVec2 {
    x: number
    y: number
}""",
"is_poisoned(): boolean": "is_poisoned: (() => {}) | boolean",
"drop(entity_to_drop: Entity): void": "drop: ((entity_to_drop: Entity) => {}) | boolean",
"menu_text_opacity: number\n    menu_text_opacity: number": "menu_text_opacity: number",
"""declare class ImGuiIO {
    displaysize: ImVec2
    framerate: number
    wantkeyboard: boolean
    keysdown: any //unknown
    keydown: any //unknown
    keypressed: any //unknown
    keyreleased: any //unknown
    keyctrl: boolean
    keyshift: boolean
    keyalt: boolean
    keysuper: boolean
    wantmouse: boolean
    mousepos: ImVec2
    mousedown: any //unknown
    mouseclicked: any //unknown
    mousedoubleclicked: any //unknown
    mousewheel: number
    gamepad: any //unknown
}""": """declare class ImGuiIO {
    displaysize: ImVec2
    framerate: number
    wantkeyboard: boolean
    /**
    * array size: 512 
    * Note: lua starts indexing at 1, you need `keysdown[string.byte('A') + 1]` to find the A key.
    */
    keysdown: Array<boolean>
    keydown(key: number | string): boolean
    keypressed(key: number | string, repeat?: boolean ): boolean
    keyreleased(key: number | string): boolean
    keyctrl: boolean
    keyshift: boolean
    keyalt: boolean
    keysuper: boolean
    wantmouse: boolean
    mousepos: ImVec2
    /** array size: 5.
    * Mouse buttons: 0=left, 1=right, 2=middle + extras (ImGuiMouseButton_COUNT == 5). Dear ImGui mostly uses left and right buttons. Others buttons allows us to track if the mouse is being used by your application
    */
    mousedown: Array<boolean>
    /** array size: 5.
    * Mouse button went from !Down to Down
    */
    mouseclicked: Array<boolean>
    /** array size: 5.
    * Has mouse button been double-clicked?
    */
    mousedoubleclicked: Array<boolean>
    mousewheel: number
    gamepad: Gamepad
}"""
}

with open('spel2_declarations_unmodified.d.ts', 'r') as file :
  declarations_text = file.read()

for find, replacement in final_replace_stuff.items():
    declarations_text = declarations_text.replace(find, replacement)

with open('spel2_declarations_unmodified.d.ts', 'w') as file:
  file.write(declarations_text)