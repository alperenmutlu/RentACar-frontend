import { CustomerDto } from "./customerDto";
import { ResponseModel } from "./responseModel";

export interface CustomerDtoResponseModel extends ResponseModel{
    data:CustomerDto[];
}