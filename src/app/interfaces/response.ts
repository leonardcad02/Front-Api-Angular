import { Employee } from "./employee";

export interface Response{
    information: Employee[];
    error: String;
}