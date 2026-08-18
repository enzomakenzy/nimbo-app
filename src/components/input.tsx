import { Search } from "lucide-react";

export function Input() {
  return (
    <form className="flex gap-3 bg-surface gradient-glass py-3 px-4.5 mt-7 items-center rounded-4xl border border-surface-border focus-within:shadow-(--shadow-warning) focus-within:shadow-amber-300">
      <label htmlFor="city">
        <Search className="text-muted-foreground w-5 h-5" />
      </label>

      <input id="city" name="city" type="text" placeholder="Buscar cidade - ex: Recife, Lisboa, Tóquio" autoComplete="off" className="text-foreground outline-none w-full placeholder:text-muted-foreground" />
    </form>
  );
}