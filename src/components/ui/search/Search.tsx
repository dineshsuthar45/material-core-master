import { useTheme } from "@mui/material";
import classNames from "classnames";
import debounce from "lodash.debounce";
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MColours } from "../../../theme/colours";
import { MIconSearchO, MIconX } from "../icons";
import { MTextfield } from "../textfield";
import "./Search.dark.scss";
import "./Search.light.scss";
import "./Search.scss";
import { SearchProps } from "./Search.types";

/**
 * Search component
 */
export const MSearch = React.forwardRef(
  (
    {
      debounceOnSearch = 250,
      disabled = false,
      id = uuidv4(),
      placeholder = "Search",
      variant = "filled",
      onChange,
      onReset,
      onSearch,
      ...props
    }: SearchProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const debouncedSearch = useRef(
      debounce(onSearch, debounceOnSearch)
    ).current;

    const theme = useTheme();

    const inputSearch = useRef<HTMLInputElement | null>(null);

    const [initializationDone, setInitializationDone] = useState(false);
    const [showReset, setShowReset] = useState((props.value ?? "").length > 0);
    const [isFocused, setIsFocused] = useState(false);
    const [searchIcon, setSearchIcon] = useState(
      <MIconSearchO
        className="adornment search"
        height={18}
        width={18}
        fill={MColours.greyScale[800]}
      />
    );

    const [resetIcon, setResetIcon] = useState(
      <MIconX
        className="adornment reset"
        height={18}
        width={18}
        fill={MColours.greyScale[800]}
      />
    );

    const handleReset = (event: React.MouseEvent<SVGSVGElement>) => {
      onReset(event);
      inputSearch.current?.focus();
    };

    const handleSearch = () => {
      inputSearch.current?.focus();
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        debouncedSearch.cancel();
        onSearch(props.value!);
      }
    };

    useEffect(() => {
      if (initializationDone) {
        debouncedSearch.cancel();
        debouncedSearch(props.value!);
        setShowReset((props.value ?? "").length > 0);
      }
    }, [props.value]);

    useEffect(() => {
      return () => {
        debouncedSearch.cancel();
      };
    }, [debouncedSearch]);

    useEffect(() => {
      const defaultColour = MColours.greyScale[400];
      const fillColor =
        theme.palette.mode === "light"
          ? isFocused
            ? "black"
            : defaultColour
          : isFocused
          ? "white"
          : defaultColour;

      setSearchIcon(
        <MIconSearchO
          className="adornment search"
          height={18}
          width={18}
          fill={fillColor}
          onClick={handleSearch}
        />
      );
      setResetIcon(
        <MIconX
          className={classNames("adornment reset", { hide: !showReset })}
          height={18}
          width={18}
          fill={fillColor}
          onClick={handleReset}
        />
      );
    }, [theme.palette.mode, isFocused, showReset]);

    useEffect(() => {
      setInitializationDone(true);
    }, []);

    return (
      <div className="search-root" ref={ref}>
        <MTextfield
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          variant={variant}
          inputRef={inputSearch}
          InputProps={{
            onKeyDown: handleKeyDown,
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
            startAdornment: searchIcon,
            endAdornment: resetIcon,
          }}
          onChange={(e) => {
            setShowReset((e.target.value ?? "").length > 0);
            onChange!(e);
          }}
          {...props}
        />
      </div>
    );
  }
);

MSearch.defaultProps = {
  debounceOnSearch: 250,
  disabled: false,
  id: uuidv4(),
  placeholder: "Search",
  variant: "filled",
};
