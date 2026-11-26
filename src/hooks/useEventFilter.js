import { useMemo } from "react";
import { useSearchParams } from "react-router";

export function useEventFilter() {
    const [serchParam, setSearchParam] = useSearchParams();
    const ispaidParam = serchParam.get("isPaid")

    const filters = useMemo(() => {
        return {
            format: serchParam.get("format") || "",
            isPaid: serchParam.get("isPaid") === "true" ? true : ispaidParam === "false" ? false : "",
            category : serchParam.get("category") || ""
        }

    }, [serchParam])
    // function filters() {

    //     
    // }

    function updatepram(update) {
        const params = new URLSearchParams(serchParam);
        Object.entries(update).forEach(([key, value]) => {
            if (value !== null && value !== "" && value !== undefined) {
                params.set(key, String(value));
            } else {
                params.delete(key);
            }
        })
        setSearchParam(params);
    }

    function apiQueryString() {
        const params = new URLSearchParams();
        if (filters.format) {
            params.set("format", filters.format);
        }


        if (filters.isPaid !== "") {
            params.set("isPaid", String(filters.isPaid));
        }

        if (filters.category ) {
            params.set("category", String(filters.category));
        }

        return params.toString()
    }
    return {
        apiQueryString,
        updatepram,
        serchParam,
        filters
    }
}