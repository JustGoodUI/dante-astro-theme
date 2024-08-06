---
title: 'jessy: Jessy is an JSON Parser written in OCaml'
description: Jessy is an parser written from scratch in OCaml to explore the areas of parsing in functional programming style.
publishDate: 'Aug 5 2024'
---

### jessy : A JSON Parser written in OCaml.

**Project Overview:**
I have been using the web frameworks for a long time in Javacript. JSON as a web interchange format is built into the `std` library in various JS runtimes like Node and Bun. Most of the parsing techniques use iterative techniques. I am trying to use this using a functional programming style.

### Sample Code:

```ocaml
let lex str =
  (* mutable references of List and string that we will mutate
  ref: https://cs3110.github.io/textbook/chapters/mut/refs.html*)
  let tokens = ref [] in
  let remaining = ref string in

  while String.length !remaining > 0 do
    match curr_string !remaining with
    | Some (json_string,rest) ->
      tokens := json_string :: !tokens;
      remaining := rest
    | None ->
      if List.mem (String.get !remaining 0) json_whitespace then
        remaining := String.sub !remaining 1 (String.length !remaining -1)
      else if List.mem (String.get !remaining 0) json_syntax then
        begin
          tokens := (String.make 1 (String.get !remaining 0)) :: !tokens;
          remaining := String.sub !remaining 1 (String.length !remaining - 1)
        end
      else
        failwith (Printf.sprintf "Unexpected character: %c" (String.get !remaining 0))
  done;
  (* reverse the list,ref phil's code*)
  List.rev !tokens
```
