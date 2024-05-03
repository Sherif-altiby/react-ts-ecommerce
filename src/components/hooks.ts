import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState, AppSispatch } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = useDispatch<AppSispatch>;