/**
 * This file exports the `CounselingRequest` model and its related types.
 *
 * 🟢 You can import this file directly.
 */
import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CounselingRequest
 *
 */
export type CounselingRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$CounselingRequestPayload>;
export type AggregateCounselingRequest = {
    _count: CounselingRequestCountAggregateOutputType | null;
    _min: CounselingRequestMinAggregateOutputType | null;
    _max: CounselingRequestMaxAggregateOutputType | null;
};
export type CounselingRequestMinAggregateOutputType = {
    id: string | null;
    subject: string | null;
    message: string | null;
    urgency: string | null;
    isAnonymous: boolean | null;
    status: string | null;
    response: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    userId: string | null;
};
export type CounselingRequestMaxAggregateOutputType = {
    id: string | null;
    subject: string | null;
    message: string | null;
    urgency: string | null;
    isAnonymous: boolean | null;
    status: string | null;
    response: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    userId: string | null;
};
export type CounselingRequestCountAggregateOutputType = {
    id: number;
    subject: number;
    message: number;
    urgency: number;
    isAnonymous: number;
    status: number;
    response: number;
    created_at: number;
    updated_at: number;
    userId: number;
    _all: number;
};
export type CounselingRequestMinAggregateInputType = {
    id?: true;
    subject?: true;
    message?: true;
    urgency?: true;
    isAnonymous?: true;
    status?: true;
    response?: true;
    created_at?: true;
    updated_at?: true;
    userId?: true;
};
export type CounselingRequestMaxAggregateInputType = {
    id?: true;
    subject?: true;
    message?: true;
    urgency?: true;
    isAnonymous?: true;
    status?: true;
    response?: true;
    created_at?: true;
    updated_at?: true;
    userId?: true;
};
export type CounselingRequestCountAggregateInputType = {
    id?: true;
    subject?: true;
    message?: true;
    urgency?: true;
    isAnonymous?: true;
    status?: true;
    response?: true;
    created_at?: true;
    updated_at?: true;
    userId?: true;
    _all?: true;
};
export type CounselingRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CounselingRequest to aggregate.
     */
    where?: Prisma.CounselingRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CounselingRequests to fetch.
     */
    orderBy?: Prisma.CounselingRequestOrderByWithRelationInput | Prisma.CounselingRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CounselingRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CounselingRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CounselingRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CounselingRequests
    **/
    _count?: true | CounselingRequestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CounselingRequestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CounselingRequestMaxAggregateInputType;
};
export type GetCounselingRequestAggregateType<T extends CounselingRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateCounselingRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCounselingRequest[P]> : Prisma.GetScalarType<T[P], AggregateCounselingRequest[P]>;
};
export type CounselingRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CounselingRequestWhereInput;
    orderBy?: Prisma.CounselingRequestOrderByWithAggregationInput | Prisma.CounselingRequestOrderByWithAggregationInput[];
    by: Prisma.CounselingRequestScalarFieldEnum[] | Prisma.CounselingRequestScalarFieldEnum;
    having?: Prisma.CounselingRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CounselingRequestCountAggregateInputType | true;
    _min?: CounselingRequestMinAggregateInputType;
    _max?: CounselingRequestMaxAggregateInputType;
};
export type CounselingRequestGroupByOutputType = {
    id: string;
    subject: string;
    message: string;
    urgency: string;
    isAnonymous: boolean;
    status: string;
    response: string | null;
    created_at: Date;
    updated_at: Date;
    userId: string;
    _count: CounselingRequestCountAggregateOutputType | null;
    _min: CounselingRequestMinAggregateOutputType | null;
    _max: CounselingRequestMaxAggregateOutputType | null;
};
type GetCounselingRequestGroupByPayload<T extends CounselingRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CounselingRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CounselingRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CounselingRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CounselingRequestGroupByOutputType[P]>;
}>>;
export type CounselingRequestWhereInput = {
    AND?: Prisma.CounselingRequestWhereInput | Prisma.CounselingRequestWhereInput[];
    OR?: Prisma.CounselingRequestWhereInput[];
    NOT?: Prisma.CounselingRequestWhereInput | Prisma.CounselingRequestWhereInput[];
    id?: Prisma.StringFilter<"CounselingRequest"> | string;
    subject?: Prisma.StringFilter<"CounselingRequest"> | string;
    message?: Prisma.StringFilter<"CounselingRequest"> | string;
    urgency?: Prisma.StringFilter<"CounselingRequest"> | string;
    isAnonymous?: Prisma.BoolFilter<"CounselingRequest"> | boolean;
    status?: Prisma.StringFilter<"CounselingRequest"> | string;
    response?: Prisma.StringNullableFilter<"CounselingRequest"> | string | null;
    created_at?: Prisma.DateTimeFilter<"CounselingRequest"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"CounselingRequest"> | Date | string;
    userId?: Prisma.StringFilter<"CounselingRequest"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type CounselingRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    urgency?: Prisma.SortOrder;
    isAnonymous?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    response?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type CounselingRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CounselingRequestWhereInput | Prisma.CounselingRequestWhereInput[];
    OR?: Prisma.CounselingRequestWhereInput[];
    NOT?: Prisma.CounselingRequestWhereInput | Prisma.CounselingRequestWhereInput[];
    subject?: Prisma.StringFilter<"CounselingRequest"> | string;
    message?: Prisma.StringFilter<"CounselingRequest"> | string;
    urgency?: Prisma.StringFilter<"CounselingRequest"> | string;
    isAnonymous?: Prisma.BoolFilter<"CounselingRequest"> | boolean;
    status?: Prisma.StringFilter<"CounselingRequest"> | string;
    response?: Prisma.StringNullableFilter<"CounselingRequest"> | string | null;
    created_at?: Prisma.DateTimeFilter<"CounselingRequest"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"CounselingRequest"> | Date | string;
    userId?: Prisma.StringFilter<"CounselingRequest"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type CounselingRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    urgency?: Prisma.SortOrder;
    isAnonymous?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    response?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.CounselingRequestCountOrderByAggregateInput;
    _max?: Prisma.CounselingRequestMaxOrderByAggregateInput;
    _min?: Prisma.CounselingRequestMinOrderByAggregateInput;
};
export type CounselingRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.CounselingRequestScalarWhereWithAggregatesInput | Prisma.CounselingRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.CounselingRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CounselingRequestScalarWhereWithAggregatesInput | Prisma.CounselingRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CounselingRequest"> | string;
    subject?: Prisma.StringWithAggregatesFilter<"CounselingRequest"> | string;
    message?: Prisma.StringWithAggregatesFilter<"CounselingRequest"> | string;
    urgency?: Prisma.StringWithAggregatesFilter<"CounselingRequest"> | string;
    isAnonymous?: Prisma.BoolWithAggregatesFilter<"CounselingRequest"> | boolean;
    status?: Prisma.StringWithAggregatesFilter<"CounselingRequest"> | string;
    response?: Prisma.StringNullableWithAggregatesFilter<"CounselingRequest"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"CounselingRequest"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"CounselingRequest"> | Date | string;
    userId?: Prisma.StringWithAggregatesFilter<"CounselingRequest"> | string;
};
export type CounselingRequestCreateInput = {
    id?: string;
    subject: string;
    message: string;
    urgency?: string;
    isAnonymous?: boolean;
    status?: string;
    response?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCounselingRequestsInput;
};
export type CounselingRequestUncheckedCreateInput = {
    id?: string;
    subject: string;
    message: string;
    urgency?: string;
    isAnonymous?: boolean;
    status?: string;
    response?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    userId: string;
};
export type CounselingRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    urgency?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCounselingRequestsNestedInput;
};
export type CounselingRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    urgency?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CounselingRequestCreateManyInput = {
    id?: string;
    subject: string;
    message: string;
    urgency?: string;
    isAnonymous?: boolean;
    status?: string;
    response?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    userId: string;
};
export type CounselingRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    urgency?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounselingRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    urgency?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CounselingRequestListRelationFilter = {
    every?: Prisma.CounselingRequestWhereInput;
    some?: Prisma.CounselingRequestWhereInput;
    none?: Prisma.CounselingRequestWhereInput;
};
export type CounselingRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CounselingRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    urgency?: Prisma.SortOrder;
    isAnonymous?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    response?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CounselingRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    urgency?: Prisma.SortOrder;
    isAnonymous?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    response?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CounselingRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    urgency?: Prisma.SortOrder;
    isAnonymous?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    response?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CounselingRequestCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CounselingRequestCreateWithoutUserInput, Prisma.CounselingRequestUncheckedCreateWithoutUserInput> | Prisma.CounselingRequestCreateWithoutUserInput[] | Prisma.CounselingRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CounselingRequestCreateOrConnectWithoutUserInput | Prisma.CounselingRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CounselingRequestCreateManyUserInputEnvelope;
    connect?: Prisma.CounselingRequestWhereUniqueInput | Prisma.CounselingRequestWhereUniqueInput[];
};
export type CounselingRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CounselingRequestCreateWithoutUserInput, Prisma.CounselingRequestUncheckedCreateWithoutUserInput> | Prisma.CounselingRequestCreateWithoutUserInput[] | Prisma.CounselingRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CounselingRequestCreateOrConnectWithoutUserInput | Prisma.CounselingRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CounselingRequestCreateManyUserInputEnvelope;
    connect?: Prisma.CounselingRequestWhereUniqueInput | Prisma.CounselingRequestWhereUniqueInput[];
};
export type CounselingRequestUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CounselingRequestCreateWithoutUserInput, Prisma.CounselingRequestUncheckedCreateWithoutUserInput> | Prisma.CounselingRequestCreateWithoutUserInput[] | Prisma.CounselingRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CounselingRequestCreateOrConnectWithoutUserInput | Prisma.CounselingRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CounselingRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.CounselingRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CounselingRequestCreateManyUserInputEnvelope;
    set?: Prisma.CounselingRequestWhereUniqueInput | Prisma.CounselingRequestWhereUniqueInput[];
    disconnect?: Prisma.CounselingRequestWhereUniqueInput | Prisma.CounselingRequestWhereUniqueInput[];
    delete?: Prisma.CounselingRequestWhereUniqueInput | Prisma.CounselingRequestWhereUniqueInput[];
    connect?: Prisma.CounselingRequestWhereUniqueInput | Prisma.CounselingRequestWhereUniqueInput[];
    update?: Prisma.CounselingRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.CounselingRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CounselingRequestUpdateManyWithWhereWithoutUserInput | Prisma.CounselingRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CounselingRequestScalarWhereInput | Prisma.CounselingRequestScalarWhereInput[];
};
export type CounselingRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CounselingRequestCreateWithoutUserInput, Prisma.CounselingRequestUncheckedCreateWithoutUserInput> | Prisma.CounselingRequestCreateWithoutUserInput[] | Prisma.CounselingRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CounselingRequestCreateOrConnectWithoutUserInput | Prisma.CounselingRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CounselingRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.CounselingRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CounselingRequestCreateManyUserInputEnvelope;
    set?: Prisma.CounselingRequestWhereUniqueInput | Prisma.CounselingRequestWhereUniqueInput[];
    disconnect?: Prisma.CounselingRequestWhereUniqueInput | Prisma.CounselingRequestWhereUniqueInput[];
    delete?: Prisma.CounselingRequestWhereUniqueInput | Prisma.CounselingRequestWhereUniqueInput[];
    connect?: Prisma.CounselingRequestWhereUniqueInput | Prisma.CounselingRequestWhereUniqueInput[];
    update?: Prisma.CounselingRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.CounselingRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CounselingRequestUpdateManyWithWhereWithoutUserInput | Prisma.CounselingRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CounselingRequestScalarWhereInput | Prisma.CounselingRequestScalarWhereInput[];
};
export type CounselingRequestCreateWithoutUserInput = {
    id?: string;
    subject: string;
    message: string;
    urgency?: string;
    isAnonymous?: boolean;
    status?: string;
    response?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type CounselingRequestUncheckedCreateWithoutUserInput = {
    id?: string;
    subject: string;
    message: string;
    urgency?: string;
    isAnonymous?: boolean;
    status?: string;
    response?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type CounselingRequestCreateOrConnectWithoutUserInput = {
    where: Prisma.CounselingRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounselingRequestCreateWithoutUserInput, Prisma.CounselingRequestUncheckedCreateWithoutUserInput>;
};
export type CounselingRequestCreateManyUserInputEnvelope = {
    data: Prisma.CounselingRequestCreateManyUserInput | Prisma.CounselingRequestCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CounselingRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CounselingRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.CounselingRequestUpdateWithoutUserInput, Prisma.CounselingRequestUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CounselingRequestCreateWithoutUserInput, Prisma.CounselingRequestUncheckedCreateWithoutUserInput>;
};
export type CounselingRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CounselingRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.CounselingRequestUpdateWithoutUserInput, Prisma.CounselingRequestUncheckedUpdateWithoutUserInput>;
};
export type CounselingRequestUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CounselingRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.CounselingRequestUpdateManyMutationInput, Prisma.CounselingRequestUncheckedUpdateManyWithoutUserInput>;
};
export type CounselingRequestScalarWhereInput = {
    AND?: Prisma.CounselingRequestScalarWhereInput | Prisma.CounselingRequestScalarWhereInput[];
    OR?: Prisma.CounselingRequestScalarWhereInput[];
    NOT?: Prisma.CounselingRequestScalarWhereInput | Prisma.CounselingRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"CounselingRequest"> | string;
    subject?: Prisma.StringFilter<"CounselingRequest"> | string;
    message?: Prisma.StringFilter<"CounselingRequest"> | string;
    urgency?: Prisma.StringFilter<"CounselingRequest"> | string;
    isAnonymous?: Prisma.BoolFilter<"CounselingRequest"> | boolean;
    status?: Prisma.StringFilter<"CounselingRequest"> | string;
    response?: Prisma.StringNullableFilter<"CounselingRequest"> | string | null;
    created_at?: Prisma.DateTimeFilter<"CounselingRequest"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"CounselingRequest"> | Date | string;
    userId?: Prisma.StringFilter<"CounselingRequest"> | string;
};
export type CounselingRequestCreateManyUserInput = {
    id?: string;
    subject: string;
    message: string;
    urgency?: string;
    isAnonymous?: boolean;
    status?: string;
    response?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type CounselingRequestUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    urgency?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounselingRequestUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    urgency?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounselingRequestUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    urgency?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounselingRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subject?: boolean;
    message?: boolean;
    urgency?: boolean;
    isAnonymous?: boolean;
    status?: boolean;
    response?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["counselingRequest"]>;
export type CounselingRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subject?: boolean;
    message?: boolean;
    urgency?: boolean;
    isAnonymous?: boolean;
    status?: boolean;
    response?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["counselingRequest"]>;
export type CounselingRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subject?: boolean;
    message?: boolean;
    urgency?: boolean;
    isAnonymous?: boolean;
    status?: boolean;
    response?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["counselingRequest"]>;
export type CounselingRequestSelectScalar = {
    id?: boolean;
    subject?: boolean;
    message?: boolean;
    urgency?: boolean;
    isAnonymous?: boolean;
    status?: boolean;
    response?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    userId?: boolean;
};
export type CounselingRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "subject" | "message" | "urgency" | "isAnonymous" | "status" | "response" | "created_at" | "updated_at" | "userId", ExtArgs["result"]["counselingRequest"]>;
export type CounselingRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CounselingRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CounselingRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CounselingRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CounselingRequest";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        subject: string;
        message: string;
        urgency: string;
        isAnonymous: boolean;
        status: string;
        response: string | null;
        created_at: Date;
        updated_at: Date;
        userId: string;
    }, ExtArgs["result"]["counselingRequest"]>;
    composites: {};
};
export type CounselingRequestGetPayload<S extends boolean | null | undefined | CounselingRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CounselingRequestPayload, S>;
export type CounselingRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CounselingRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CounselingRequestCountAggregateInputType | true;
};
export interface CounselingRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CounselingRequest'];
        meta: {
            name: 'CounselingRequest';
        };
    };
    /**
     * Find zero or one CounselingRequest that matches the filter.
     * @param {CounselingRequestFindUniqueArgs} args - Arguments to find a CounselingRequest
     * @example
     * // Get one CounselingRequest
     * const counselingRequest = await prisma.counselingRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CounselingRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, CounselingRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CounselingRequestClient<runtime.Types.Result.GetResult<Prisma.$CounselingRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CounselingRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CounselingRequestFindUniqueOrThrowArgs} args - Arguments to find a CounselingRequest
     * @example
     * // Get one CounselingRequest
     * const counselingRequest = await prisma.counselingRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CounselingRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CounselingRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CounselingRequestClient<runtime.Types.Result.GetResult<Prisma.$CounselingRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CounselingRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselingRequestFindFirstArgs} args - Arguments to find a CounselingRequest
     * @example
     * // Get one CounselingRequest
     * const counselingRequest = await prisma.counselingRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CounselingRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, CounselingRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__CounselingRequestClient<runtime.Types.Result.GetResult<Prisma.$CounselingRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CounselingRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselingRequestFindFirstOrThrowArgs} args - Arguments to find a CounselingRequest
     * @example
     * // Get one CounselingRequest
     * const counselingRequest = await prisma.counselingRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CounselingRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CounselingRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CounselingRequestClient<runtime.Types.Result.GetResult<Prisma.$CounselingRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CounselingRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselingRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CounselingRequests
     * const counselingRequests = await prisma.counselingRequest.findMany()
     *
     * // Get first 10 CounselingRequests
     * const counselingRequests = await prisma.counselingRequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const counselingRequestWithIdOnly = await prisma.counselingRequest.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CounselingRequestFindManyArgs>(args?: Prisma.SelectSubset<T, CounselingRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounselingRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CounselingRequest.
     * @param {CounselingRequestCreateArgs} args - Arguments to create a CounselingRequest.
     * @example
     * // Create one CounselingRequest
     * const CounselingRequest = await prisma.counselingRequest.create({
     *   data: {
     *     // ... data to create a CounselingRequest
     *   }
     * })
     *
     */
    create<T extends CounselingRequestCreateArgs>(args: Prisma.SelectSubset<T, CounselingRequestCreateArgs<ExtArgs>>): Prisma.Prisma__CounselingRequestClient<runtime.Types.Result.GetResult<Prisma.$CounselingRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CounselingRequests.
     * @param {CounselingRequestCreateManyArgs} args - Arguments to create many CounselingRequests.
     * @example
     * // Create many CounselingRequests
     * const counselingRequest = await prisma.counselingRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CounselingRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, CounselingRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CounselingRequests and returns the data saved in the database.
     * @param {CounselingRequestCreateManyAndReturnArgs} args - Arguments to create many CounselingRequests.
     * @example
     * // Create many CounselingRequests
     * const counselingRequest = await prisma.counselingRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CounselingRequests and only return the `id`
     * const counselingRequestWithIdOnly = await prisma.counselingRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CounselingRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CounselingRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounselingRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CounselingRequest.
     * @param {CounselingRequestDeleteArgs} args - Arguments to delete one CounselingRequest.
     * @example
     * // Delete one CounselingRequest
     * const CounselingRequest = await prisma.counselingRequest.delete({
     *   where: {
     *     // ... filter to delete one CounselingRequest
     *   }
     * })
     *
     */
    delete<T extends CounselingRequestDeleteArgs>(args: Prisma.SelectSubset<T, CounselingRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__CounselingRequestClient<runtime.Types.Result.GetResult<Prisma.$CounselingRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CounselingRequest.
     * @param {CounselingRequestUpdateArgs} args - Arguments to update one CounselingRequest.
     * @example
     * // Update one CounselingRequest
     * const counselingRequest = await prisma.counselingRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CounselingRequestUpdateArgs>(args: Prisma.SelectSubset<T, CounselingRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__CounselingRequestClient<runtime.Types.Result.GetResult<Prisma.$CounselingRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CounselingRequests.
     * @param {CounselingRequestDeleteManyArgs} args - Arguments to filter CounselingRequests to delete.
     * @example
     * // Delete a few CounselingRequests
     * const { count } = await prisma.counselingRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CounselingRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, CounselingRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CounselingRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselingRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CounselingRequests
     * const counselingRequest = await prisma.counselingRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CounselingRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, CounselingRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CounselingRequests and returns the data updated in the database.
     * @param {CounselingRequestUpdateManyAndReturnArgs} args - Arguments to update many CounselingRequests.
     * @example
     * // Update many CounselingRequests
     * const counselingRequest = await prisma.counselingRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CounselingRequests and only return the `id`
     * const counselingRequestWithIdOnly = await prisma.counselingRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CounselingRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CounselingRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounselingRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CounselingRequest.
     * @param {CounselingRequestUpsertArgs} args - Arguments to update or create a CounselingRequest.
     * @example
     * // Update or create a CounselingRequest
     * const counselingRequest = await prisma.counselingRequest.upsert({
     *   create: {
     *     // ... data to create a CounselingRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CounselingRequest we want to update
     *   }
     * })
     */
    upsert<T extends CounselingRequestUpsertArgs>(args: Prisma.SelectSubset<T, CounselingRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__CounselingRequestClient<runtime.Types.Result.GetResult<Prisma.$CounselingRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CounselingRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselingRequestCountArgs} args - Arguments to filter CounselingRequests to count.
     * @example
     * // Count the number of CounselingRequests
     * const count = await prisma.counselingRequest.count({
     *   where: {
     *     // ... the filter for the CounselingRequests we want to count
     *   }
     * })
    **/
    count<T extends CounselingRequestCountArgs>(args?: Prisma.Subset<T, CounselingRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CounselingRequestCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CounselingRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselingRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CounselingRequestAggregateArgs>(args: Prisma.Subset<T, CounselingRequestAggregateArgs>): Prisma.PrismaPromise<GetCounselingRequestAggregateType<T>>;
    /**
     * Group by CounselingRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselingRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends CounselingRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CounselingRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: CounselingRequestGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CounselingRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCounselingRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CounselingRequest model
     */
    readonly fields: CounselingRequestFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CounselingRequest.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CounselingRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the CounselingRequest model
 */
export interface CounselingRequestFieldRefs {
    readonly id: Prisma.FieldRef<"CounselingRequest", 'String'>;
    readonly subject: Prisma.FieldRef<"CounselingRequest", 'String'>;
    readonly message: Prisma.FieldRef<"CounselingRequest", 'String'>;
    readonly urgency: Prisma.FieldRef<"CounselingRequest", 'String'>;
    readonly isAnonymous: Prisma.FieldRef<"CounselingRequest", 'Boolean'>;
    readonly status: Prisma.FieldRef<"CounselingRequest", 'String'>;
    readonly response: Prisma.FieldRef<"CounselingRequest", 'String'>;
    readonly created_at: Prisma.FieldRef<"CounselingRequest", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"CounselingRequest", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"CounselingRequest", 'String'>;
}
/**
 * CounselingRequest findUnique
 */
export type CounselingRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingRequest
     */
    select?: Prisma.CounselingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CounselingRequest
     */
    omit?: Prisma.CounselingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CounselingRequestInclude<ExtArgs> | null;
    /**
     * Filter, which CounselingRequest to fetch.
     */
    where: Prisma.CounselingRequestWhereUniqueInput;
};
/**
 * CounselingRequest findUniqueOrThrow
 */
export type CounselingRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingRequest
     */
    select?: Prisma.CounselingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CounselingRequest
     */
    omit?: Prisma.CounselingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CounselingRequestInclude<ExtArgs> | null;
    /**
     * Filter, which CounselingRequest to fetch.
     */
    where: Prisma.CounselingRequestWhereUniqueInput;
};
/**
 * CounselingRequest findFirst
 */
export type CounselingRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingRequest
     */
    select?: Prisma.CounselingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CounselingRequest
     */
    omit?: Prisma.CounselingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CounselingRequestInclude<ExtArgs> | null;
    /**
     * Filter, which CounselingRequest to fetch.
     */
    where?: Prisma.CounselingRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CounselingRequests to fetch.
     */
    orderBy?: Prisma.CounselingRequestOrderByWithRelationInput | Prisma.CounselingRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CounselingRequests.
     */
    cursor?: Prisma.CounselingRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CounselingRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CounselingRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CounselingRequests.
     */
    distinct?: Prisma.CounselingRequestScalarFieldEnum | Prisma.CounselingRequestScalarFieldEnum[];
};
/**
 * CounselingRequest findFirstOrThrow
 */
export type CounselingRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingRequest
     */
    select?: Prisma.CounselingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CounselingRequest
     */
    omit?: Prisma.CounselingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CounselingRequestInclude<ExtArgs> | null;
    /**
     * Filter, which CounselingRequest to fetch.
     */
    where?: Prisma.CounselingRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CounselingRequests to fetch.
     */
    orderBy?: Prisma.CounselingRequestOrderByWithRelationInput | Prisma.CounselingRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CounselingRequests.
     */
    cursor?: Prisma.CounselingRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CounselingRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CounselingRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CounselingRequests.
     */
    distinct?: Prisma.CounselingRequestScalarFieldEnum | Prisma.CounselingRequestScalarFieldEnum[];
};
/**
 * CounselingRequest findMany
 */
export type CounselingRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingRequest
     */
    select?: Prisma.CounselingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CounselingRequest
     */
    omit?: Prisma.CounselingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CounselingRequestInclude<ExtArgs> | null;
    /**
     * Filter, which CounselingRequests to fetch.
     */
    where?: Prisma.CounselingRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CounselingRequests to fetch.
     */
    orderBy?: Prisma.CounselingRequestOrderByWithRelationInput | Prisma.CounselingRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CounselingRequests.
     */
    cursor?: Prisma.CounselingRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CounselingRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CounselingRequests.
     */
    skip?: number;
    distinct?: Prisma.CounselingRequestScalarFieldEnum | Prisma.CounselingRequestScalarFieldEnum[];
};
/**
 * CounselingRequest create
 */
export type CounselingRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingRequest
     */
    select?: Prisma.CounselingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CounselingRequest
     */
    omit?: Prisma.CounselingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CounselingRequestInclude<ExtArgs> | null;
    /**
     * The data needed to create a CounselingRequest.
     */
    data: Prisma.XOR<Prisma.CounselingRequestCreateInput, Prisma.CounselingRequestUncheckedCreateInput>;
};
/**
 * CounselingRequest createMany
 */
export type CounselingRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CounselingRequests.
     */
    data: Prisma.CounselingRequestCreateManyInput | Prisma.CounselingRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CounselingRequest createManyAndReturn
 */
export type CounselingRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingRequest
     */
    select?: Prisma.CounselingRequestSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CounselingRequest
     */
    omit?: Prisma.CounselingRequestOmit<ExtArgs> | null;
    /**
     * The data used to create many CounselingRequests.
     */
    data: Prisma.CounselingRequestCreateManyInput | Prisma.CounselingRequestCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CounselingRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CounselingRequest update
 */
export type CounselingRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingRequest
     */
    select?: Prisma.CounselingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CounselingRequest
     */
    omit?: Prisma.CounselingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CounselingRequestInclude<ExtArgs> | null;
    /**
     * The data needed to update a CounselingRequest.
     */
    data: Prisma.XOR<Prisma.CounselingRequestUpdateInput, Prisma.CounselingRequestUncheckedUpdateInput>;
    /**
     * Choose, which CounselingRequest to update.
     */
    where: Prisma.CounselingRequestWhereUniqueInput;
};
/**
 * CounselingRequest updateMany
 */
export type CounselingRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CounselingRequests.
     */
    data: Prisma.XOR<Prisma.CounselingRequestUpdateManyMutationInput, Prisma.CounselingRequestUncheckedUpdateManyInput>;
    /**
     * Filter which CounselingRequests to update
     */
    where?: Prisma.CounselingRequestWhereInput;
    /**
     * Limit how many CounselingRequests to update.
     */
    limit?: number;
};
/**
 * CounselingRequest updateManyAndReturn
 */
export type CounselingRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingRequest
     */
    select?: Prisma.CounselingRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CounselingRequest
     */
    omit?: Prisma.CounselingRequestOmit<ExtArgs> | null;
    /**
     * The data used to update CounselingRequests.
     */
    data: Prisma.XOR<Prisma.CounselingRequestUpdateManyMutationInput, Prisma.CounselingRequestUncheckedUpdateManyInput>;
    /**
     * Filter which CounselingRequests to update
     */
    where?: Prisma.CounselingRequestWhereInput;
    /**
     * Limit how many CounselingRequests to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CounselingRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CounselingRequest upsert
 */
export type CounselingRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingRequest
     */
    select?: Prisma.CounselingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CounselingRequest
     */
    omit?: Prisma.CounselingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CounselingRequestInclude<ExtArgs> | null;
    /**
     * The filter to search for the CounselingRequest to update in case it exists.
     */
    where: Prisma.CounselingRequestWhereUniqueInput;
    /**
     * In case the CounselingRequest found by the `where` argument doesn't exist, create a new CounselingRequest with this data.
     */
    create: Prisma.XOR<Prisma.CounselingRequestCreateInput, Prisma.CounselingRequestUncheckedCreateInput>;
    /**
     * In case the CounselingRequest was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CounselingRequestUpdateInput, Prisma.CounselingRequestUncheckedUpdateInput>;
};
/**
 * CounselingRequest delete
 */
export type CounselingRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingRequest
     */
    select?: Prisma.CounselingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CounselingRequest
     */
    omit?: Prisma.CounselingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CounselingRequestInclude<ExtArgs> | null;
    /**
     * Filter which CounselingRequest to delete.
     */
    where: Prisma.CounselingRequestWhereUniqueInput;
};
/**
 * CounselingRequest deleteMany
 */
export type CounselingRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CounselingRequests to delete
     */
    where?: Prisma.CounselingRequestWhereInput;
    /**
     * Limit how many CounselingRequests to delete.
     */
    limit?: number;
};
/**
 * CounselingRequest without action
 */
export type CounselingRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingRequest
     */
    select?: Prisma.CounselingRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CounselingRequest
     */
    omit?: Prisma.CounselingRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CounselingRequestInclude<ExtArgs> | null;
};
export {};
