/**
 * This file exports the `PrayerRequest` model and its related types.
 *
 * 🟢 You can import this file directly.
 */
import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model PrayerRequest
 *
 */
export type PrayerRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$PrayerRequestPayload>;
export type AggregatePrayerRequest = {
    _count: PrayerRequestCountAggregateOutputType | null;
    _avg: PrayerRequestAvgAggregateOutputType | null;
    _sum: PrayerRequestSumAggregateOutputType | null;
    _min: PrayerRequestMinAggregateOutputType | null;
    _max: PrayerRequestMaxAggregateOutputType | null;
};
export type PrayerRequestAvgAggregateOutputType = {
    prayerCount: number | null;
};
export type PrayerRequestSumAggregateOutputType = {
    prayerCount: number | null;
};
export type PrayerRequestMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    isAnonymous: boolean | null;
    status: string | null;
    prayerCount: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    userId: string | null;
};
export type PrayerRequestMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    isAnonymous: boolean | null;
    status: string | null;
    prayerCount: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    userId: string | null;
};
export type PrayerRequestCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    isAnonymous: number;
    status: number;
    prayerCount: number;
    created_at: number;
    updated_at: number;
    userId: number;
    _all: number;
};
export type PrayerRequestAvgAggregateInputType = {
    prayerCount?: true;
};
export type PrayerRequestSumAggregateInputType = {
    prayerCount?: true;
};
export type PrayerRequestMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    isAnonymous?: true;
    status?: true;
    prayerCount?: true;
    created_at?: true;
    updated_at?: true;
    userId?: true;
};
export type PrayerRequestMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    isAnonymous?: true;
    status?: true;
    prayerCount?: true;
    created_at?: true;
    updated_at?: true;
    userId?: true;
};
export type PrayerRequestCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    isAnonymous?: true;
    status?: true;
    prayerCount?: true;
    created_at?: true;
    updated_at?: true;
    userId?: true;
    _all?: true;
};
export type PrayerRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PrayerRequest to aggregate.
     */
    where?: Prisma.PrayerRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PrayerRequests to fetch.
     */
    orderBy?: Prisma.PrayerRequestOrderByWithRelationInput | Prisma.PrayerRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PrayerRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PrayerRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PrayerRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PrayerRequests
    **/
    _count?: true | PrayerRequestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PrayerRequestAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PrayerRequestSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PrayerRequestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PrayerRequestMaxAggregateInputType;
};
export type GetPrayerRequestAggregateType<T extends PrayerRequestAggregateArgs> = {
    [P in keyof T & keyof AggregatePrayerRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrayerRequest[P]> : Prisma.GetScalarType<T[P], AggregatePrayerRequest[P]>;
};
export type PrayerRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrayerRequestWhereInput;
    orderBy?: Prisma.PrayerRequestOrderByWithAggregationInput | Prisma.PrayerRequestOrderByWithAggregationInput[];
    by: Prisma.PrayerRequestScalarFieldEnum[] | Prisma.PrayerRequestScalarFieldEnum;
    having?: Prisma.PrayerRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PrayerRequestCountAggregateInputType | true;
    _avg?: PrayerRequestAvgAggregateInputType;
    _sum?: PrayerRequestSumAggregateInputType;
    _min?: PrayerRequestMinAggregateInputType;
    _max?: PrayerRequestMaxAggregateInputType;
};
export type PrayerRequestGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    isAnonymous: boolean;
    status: string;
    prayerCount: number;
    created_at: Date;
    updated_at: Date;
    userId: string;
    _count: PrayerRequestCountAggregateOutputType | null;
    _avg: PrayerRequestAvgAggregateOutputType | null;
    _sum: PrayerRequestSumAggregateOutputType | null;
    _min: PrayerRequestMinAggregateOutputType | null;
    _max: PrayerRequestMaxAggregateOutputType | null;
};
type GetPrayerRequestGroupByPayload<T extends PrayerRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PrayerRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PrayerRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PrayerRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PrayerRequestGroupByOutputType[P]>;
}>>;
export type PrayerRequestWhereInput = {
    AND?: Prisma.PrayerRequestWhereInput | Prisma.PrayerRequestWhereInput[];
    OR?: Prisma.PrayerRequestWhereInput[];
    NOT?: Prisma.PrayerRequestWhereInput | Prisma.PrayerRequestWhereInput[];
    id?: Prisma.StringFilter<"PrayerRequest"> | string;
    title?: Prisma.StringFilter<"PrayerRequest"> | string;
    description?: Prisma.StringFilter<"PrayerRequest"> | string;
    isAnonymous?: Prisma.BoolFilter<"PrayerRequest"> | boolean;
    status?: Prisma.StringFilter<"PrayerRequest"> | string;
    prayerCount?: Prisma.IntFilter<"PrayerRequest"> | number;
    created_at?: Prisma.DateTimeFilter<"PrayerRequest"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"PrayerRequest"> | Date | string;
    userId?: Prisma.StringFilter<"PrayerRequest"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    prayers?: Prisma.PrayerListRelationFilter;
};
export type PrayerRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isAnonymous?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    prayerCount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    prayers?: Prisma.PrayerOrderByRelationAggregateInput;
};
export type PrayerRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PrayerRequestWhereInput | Prisma.PrayerRequestWhereInput[];
    OR?: Prisma.PrayerRequestWhereInput[];
    NOT?: Prisma.PrayerRequestWhereInput | Prisma.PrayerRequestWhereInput[];
    title?: Prisma.StringFilter<"PrayerRequest"> | string;
    description?: Prisma.StringFilter<"PrayerRequest"> | string;
    isAnonymous?: Prisma.BoolFilter<"PrayerRequest"> | boolean;
    status?: Prisma.StringFilter<"PrayerRequest"> | string;
    prayerCount?: Prisma.IntFilter<"PrayerRequest"> | number;
    created_at?: Prisma.DateTimeFilter<"PrayerRequest"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"PrayerRequest"> | Date | string;
    userId?: Prisma.StringFilter<"PrayerRequest"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    prayers?: Prisma.PrayerListRelationFilter;
}, "id">;
export type PrayerRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isAnonymous?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    prayerCount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.PrayerRequestCountOrderByAggregateInput;
    _avg?: Prisma.PrayerRequestAvgOrderByAggregateInput;
    _max?: Prisma.PrayerRequestMaxOrderByAggregateInput;
    _min?: Prisma.PrayerRequestMinOrderByAggregateInput;
    _sum?: Prisma.PrayerRequestSumOrderByAggregateInput;
};
export type PrayerRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.PrayerRequestScalarWhereWithAggregatesInput | Prisma.PrayerRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.PrayerRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PrayerRequestScalarWhereWithAggregatesInput | Prisma.PrayerRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PrayerRequest"> | string;
    title?: Prisma.StringWithAggregatesFilter<"PrayerRequest"> | string;
    description?: Prisma.StringWithAggregatesFilter<"PrayerRequest"> | string;
    isAnonymous?: Prisma.BoolWithAggregatesFilter<"PrayerRequest"> | boolean;
    status?: Prisma.StringWithAggregatesFilter<"PrayerRequest"> | string;
    prayerCount?: Prisma.IntWithAggregatesFilter<"PrayerRequest"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"PrayerRequest"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"PrayerRequest"> | Date | string;
    userId?: Prisma.StringWithAggregatesFilter<"PrayerRequest"> | string;
};
export type PrayerRequestCreateInput = {
    id?: string;
    title: string;
    description: string;
    isAnonymous?: boolean;
    status?: string;
    prayerCount?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPrayerRequestsInput;
    prayers?: Prisma.PrayerCreateNestedManyWithoutPrayerRequestInput;
};
export type PrayerRequestUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    isAnonymous?: boolean;
    status?: string;
    prayerCount?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    userId: string;
    prayers?: Prisma.PrayerUncheckedCreateNestedManyWithoutPrayerRequestInput;
};
export type PrayerRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    prayerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPrayerRequestsNestedInput;
    prayers?: Prisma.PrayerUpdateManyWithoutPrayerRequestNestedInput;
};
export type PrayerRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    prayerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    prayers?: Prisma.PrayerUncheckedUpdateManyWithoutPrayerRequestNestedInput;
};
export type PrayerRequestCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    isAnonymous?: boolean;
    status?: string;
    prayerCount?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    userId: string;
};
export type PrayerRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    prayerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrayerRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    prayerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PrayerRequestListRelationFilter = {
    every?: Prisma.PrayerRequestWhereInput;
    some?: Prisma.PrayerRequestWhereInput;
    none?: Prisma.PrayerRequestWhereInput;
};
export type PrayerRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PrayerRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isAnonymous?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    prayerCount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type PrayerRequestAvgOrderByAggregateInput = {
    prayerCount?: Prisma.SortOrder;
};
export type PrayerRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isAnonymous?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    prayerCount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type PrayerRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isAnonymous?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    prayerCount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type PrayerRequestSumOrderByAggregateInput = {
    prayerCount?: Prisma.SortOrder;
};
export type PrayerRequestScalarRelationFilter = {
    is?: Prisma.PrayerRequestWhereInput;
    isNot?: Prisma.PrayerRequestWhereInput;
};
export type PrayerRequestCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PrayerRequestCreateWithoutUserInput, Prisma.PrayerRequestUncheckedCreateWithoutUserInput> | Prisma.PrayerRequestCreateWithoutUserInput[] | Prisma.PrayerRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PrayerRequestCreateOrConnectWithoutUserInput | Prisma.PrayerRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PrayerRequestCreateManyUserInputEnvelope;
    connect?: Prisma.PrayerRequestWhereUniqueInput | Prisma.PrayerRequestWhereUniqueInput[];
};
export type PrayerRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PrayerRequestCreateWithoutUserInput, Prisma.PrayerRequestUncheckedCreateWithoutUserInput> | Prisma.PrayerRequestCreateWithoutUserInput[] | Prisma.PrayerRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PrayerRequestCreateOrConnectWithoutUserInput | Prisma.PrayerRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PrayerRequestCreateManyUserInputEnvelope;
    connect?: Prisma.PrayerRequestWhereUniqueInput | Prisma.PrayerRequestWhereUniqueInput[];
};
export type PrayerRequestUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PrayerRequestCreateWithoutUserInput, Prisma.PrayerRequestUncheckedCreateWithoutUserInput> | Prisma.PrayerRequestCreateWithoutUserInput[] | Prisma.PrayerRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PrayerRequestCreateOrConnectWithoutUserInput | Prisma.PrayerRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PrayerRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.PrayerRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PrayerRequestCreateManyUserInputEnvelope;
    set?: Prisma.PrayerRequestWhereUniqueInput | Prisma.PrayerRequestWhereUniqueInput[];
    disconnect?: Prisma.PrayerRequestWhereUniqueInput | Prisma.PrayerRequestWhereUniqueInput[];
    delete?: Prisma.PrayerRequestWhereUniqueInput | Prisma.PrayerRequestWhereUniqueInput[];
    connect?: Prisma.PrayerRequestWhereUniqueInput | Prisma.PrayerRequestWhereUniqueInput[];
    update?: Prisma.PrayerRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.PrayerRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PrayerRequestUpdateManyWithWhereWithoutUserInput | Prisma.PrayerRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PrayerRequestScalarWhereInput | Prisma.PrayerRequestScalarWhereInput[];
};
export type PrayerRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PrayerRequestCreateWithoutUserInput, Prisma.PrayerRequestUncheckedCreateWithoutUserInput> | Prisma.PrayerRequestCreateWithoutUserInput[] | Prisma.PrayerRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PrayerRequestCreateOrConnectWithoutUserInput | Prisma.PrayerRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PrayerRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.PrayerRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PrayerRequestCreateManyUserInputEnvelope;
    set?: Prisma.PrayerRequestWhereUniqueInput | Prisma.PrayerRequestWhereUniqueInput[];
    disconnect?: Prisma.PrayerRequestWhereUniqueInput | Prisma.PrayerRequestWhereUniqueInput[];
    delete?: Prisma.PrayerRequestWhereUniqueInput | Prisma.PrayerRequestWhereUniqueInput[];
    connect?: Prisma.PrayerRequestWhereUniqueInput | Prisma.PrayerRequestWhereUniqueInput[];
    update?: Prisma.PrayerRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.PrayerRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PrayerRequestUpdateManyWithWhereWithoutUserInput | Prisma.PrayerRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PrayerRequestScalarWhereInput | Prisma.PrayerRequestScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PrayerRequestCreateNestedOneWithoutPrayersInput = {
    create?: Prisma.XOR<Prisma.PrayerRequestCreateWithoutPrayersInput, Prisma.PrayerRequestUncheckedCreateWithoutPrayersInput>;
    connectOrCreate?: Prisma.PrayerRequestCreateOrConnectWithoutPrayersInput;
    connect?: Prisma.PrayerRequestWhereUniqueInput;
};
export type PrayerRequestUpdateOneRequiredWithoutPrayersNestedInput = {
    create?: Prisma.XOR<Prisma.PrayerRequestCreateWithoutPrayersInput, Prisma.PrayerRequestUncheckedCreateWithoutPrayersInput>;
    connectOrCreate?: Prisma.PrayerRequestCreateOrConnectWithoutPrayersInput;
    upsert?: Prisma.PrayerRequestUpsertWithoutPrayersInput;
    connect?: Prisma.PrayerRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PrayerRequestUpdateToOneWithWhereWithoutPrayersInput, Prisma.PrayerRequestUpdateWithoutPrayersInput>, Prisma.PrayerRequestUncheckedUpdateWithoutPrayersInput>;
};
export type PrayerRequestCreateWithoutUserInput = {
    id?: string;
    title: string;
    description: string;
    isAnonymous?: boolean;
    status?: string;
    prayerCount?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    prayers?: Prisma.PrayerCreateNestedManyWithoutPrayerRequestInput;
};
export type PrayerRequestUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description: string;
    isAnonymous?: boolean;
    status?: string;
    prayerCount?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    prayers?: Prisma.PrayerUncheckedCreateNestedManyWithoutPrayerRequestInput;
};
export type PrayerRequestCreateOrConnectWithoutUserInput = {
    where: Prisma.PrayerRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrayerRequestCreateWithoutUserInput, Prisma.PrayerRequestUncheckedCreateWithoutUserInput>;
};
export type PrayerRequestCreateManyUserInputEnvelope = {
    data: Prisma.PrayerRequestCreateManyUserInput | Prisma.PrayerRequestCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PrayerRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PrayerRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.PrayerRequestUpdateWithoutUserInput, Prisma.PrayerRequestUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PrayerRequestCreateWithoutUserInput, Prisma.PrayerRequestUncheckedCreateWithoutUserInput>;
};
export type PrayerRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PrayerRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.PrayerRequestUpdateWithoutUserInput, Prisma.PrayerRequestUncheckedUpdateWithoutUserInput>;
};
export type PrayerRequestUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PrayerRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.PrayerRequestUpdateManyMutationInput, Prisma.PrayerRequestUncheckedUpdateManyWithoutUserInput>;
};
export type PrayerRequestScalarWhereInput = {
    AND?: Prisma.PrayerRequestScalarWhereInput | Prisma.PrayerRequestScalarWhereInput[];
    OR?: Prisma.PrayerRequestScalarWhereInput[];
    NOT?: Prisma.PrayerRequestScalarWhereInput | Prisma.PrayerRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"PrayerRequest"> | string;
    title?: Prisma.StringFilter<"PrayerRequest"> | string;
    description?: Prisma.StringFilter<"PrayerRequest"> | string;
    isAnonymous?: Prisma.BoolFilter<"PrayerRequest"> | boolean;
    status?: Prisma.StringFilter<"PrayerRequest"> | string;
    prayerCount?: Prisma.IntFilter<"PrayerRequest"> | number;
    created_at?: Prisma.DateTimeFilter<"PrayerRequest"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"PrayerRequest"> | Date | string;
    userId?: Prisma.StringFilter<"PrayerRequest"> | string;
};
export type PrayerRequestCreateWithoutPrayersInput = {
    id?: string;
    title: string;
    description: string;
    isAnonymous?: boolean;
    status?: string;
    prayerCount?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPrayerRequestsInput;
};
export type PrayerRequestUncheckedCreateWithoutPrayersInput = {
    id?: string;
    title: string;
    description: string;
    isAnonymous?: boolean;
    status?: string;
    prayerCount?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    userId: string;
};
export type PrayerRequestCreateOrConnectWithoutPrayersInput = {
    where: Prisma.PrayerRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrayerRequestCreateWithoutPrayersInput, Prisma.PrayerRequestUncheckedCreateWithoutPrayersInput>;
};
export type PrayerRequestUpsertWithoutPrayersInput = {
    update: Prisma.XOR<Prisma.PrayerRequestUpdateWithoutPrayersInput, Prisma.PrayerRequestUncheckedUpdateWithoutPrayersInput>;
    create: Prisma.XOR<Prisma.PrayerRequestCreateWithoutPrayersInput, Prisma.PrayerRequestUncheckedCreateWithoutPrayersInput>;
    where?: Prisma.PrayerRequestWhereInput;
};
export type PrayerRequestUpdateToOneWithWhereWithoutPrayersInput = {
    where?: Prisma.PrayerRequestWhereInput;
    data: Prisma.XOR<Prisma.PrayerRequestUpdateWithoutPrayersInput, Prisma.PrayerRequestUncheckedUpdateWithoutPrayersInput>;
};
export type PrayerRequestUpdateWithoutPrayersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    prayerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPrayerRequestsNestedInput;
};
export type PrayerRequestUncheckedUpdateWithoutPrayersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    prayerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PrayerRequestCreateManyUserInput = {
    id?: string;
    title: string;
    description: string;
    isAnonymous?: boolean;
    status?: string;
    prayerCount?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type PrayerRequestUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    prayerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prayers?: Prisma.PrayerUpdateManyWithoutPrayerRequestNestedInput;
};
export type PrayerRequestUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    prayerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prayers?: Prisma.PrayerUncheckedUpdateManyWithoutPrayerRequestNestedInput;
};
export type PrayerRequestUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    prayerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type PrayerRequestCountOutputType
 */
export type PrayerRequestCountOutputType = {
    prayers: number;
};
export type PrayerRequestCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prayers?: boolean | PrayerRequestCountOutputTypeCountPrayersArgs;
};
/**
 * PrayerRequestCountOutputType without action
 */
export type PrayerRequestCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequestCountOutputType
     */
    select?: Prisma.PrayerRequestCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PrayerRequestCountOutputType without action
 */
export type PrayerRequestCountOutputTypeCountPrayersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrayerWhereInput;
};
export type PrayerRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    isAnonymous?: boolean;
    status?: boolean;
    prayerCount?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    prayers?: boolean | Prisma.PrayerRequest$prayersArgs<ExtArgs>;
    _count?: boolean | Prisma.PrayerRequestCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prayerRequest"]>;
export type PrayerRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    isAnonymous?: boolean;
    status?: boolean;
    prayerCount?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prayerRequest"]>;
export type PrayerRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    isAnonymous?: boolean;
    status?: boolean;
    prayerCount?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prayerRequest"]>;
export type PrayerRequestSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    isAnonymous?: boolean;
    status?: boolean;
    prayerCount?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    userId?: boolean;
};
export type PrayerRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "isAnonymous" | "status" | "prayerCount" | "created_at" | "updated_at" | "userId", ExtArgs["result"]["prayerRequest"]>;
export type PrayerRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    prayers?: boolean | Prisma.PrayerRequest$prayersArgs<ExtArgs>;
    _count?: boolean | Prisma.PrayerRequestCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PrayerRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PrayerRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PrayerRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PrayerRequest";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        prayers: Prisma.$PrayerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string;
        isAnonymous: boolean;
        status: string;
        prayerCount: number;
        created_at: Date;
        updated_at: Date;
        userId: string;
    }, ExtArgs["result"]["prayerRequest"]>;
    composites: {};
};
export type PrayerRequestGetPayload<S extends boolean | null | undefined | PrayerRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PrayerRequestPayload, S>;
export type PrayerRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PrayerRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PrayerRequestCountAggregateInputType | true;
};
export interface PrayerRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PrayerRequest'];
        meta: {
            name: 'PrayerRequest';
        };
    };
    /**
     * Find zero or one PrayerRequest that matches the filter.
     * @param {PrayerRequestFindUniqueArgs} args - Arguments to find a PrayerRequest
     * @example
     * // Get one PrayerRequest
     * const prayerRequest = await prisma.prayerRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrayerRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, PrayerRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PrayerRequestClient<runtime.Types.Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PrayerRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrayerRequestFindUniqueOrThrowArgs} args - Arguments to find a PrayerRequest
     * @example
     * // Get one PrayerRequest
     * const prayerRequest = await prisma.prayerRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrayerRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PrayerRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrayerRequestClient<runtime.Types.Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PrayerRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerRequestFindFirstArgs} args - Arguments to find a PrayerRequest
     * @example
     * // Get one PrayerRequest
     * const prayerRequest = await prisma.prayerRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrayerRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, PrayerRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__PrayerRequestClient<runtime.Types.Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PrayerRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerRequestFindFirstOrThrowArgs} args - Arguments to find a PrayerRequest
     * @example
     * // Get one PrayerRequest
     * const prayerRequest = await prisma.prayerRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrayerRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PrayerRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrayerRequestClient<runtime.Types.Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PrayerRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrayerRequests
     * const prayerRequests = await prisma.prayerRequest.findMany()
     *
     * // Get first 10 PrayerRequests
     * const prayerRequests = await prisma.prayerRequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const prayerRequestWithIdOnly = await prisma.prayerRequest.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PrayerRequestFindManyArgs>(args?: Prisma.SelectSubset<T, PrayerRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PrayerRequest.
     * @param {PrayerRequestCreateArgs} args - Arguments to create a PrayerRequest.
     * @example
     * // Create one PrayerRequest
     * const PrayerRequest = await prisma.prayerRequest.create({
     *   data: {
     *     // ... data to create a PrayerRequest
     *   }
     * })
     *
     */
    create<T extends PrayerRequestCreateArgs>(args: Prisma.SelectSubset<T, PrayerRequestCreateArgs<ExtArgs>>): Prisma.Prisma__PrayerRequestClient<runtime.Types.Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PrayerRequests.
     * @param {PrayerRequestCreateManyArgs} args - Arguments to create many PrayerRequests.
     * @example
     * // Create many PrayerRequests
     * const prayerRequest = await prisma.prayerRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PrayerRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, PrayerRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PrayerRequests and returns the data saved in the database.
     * @param {PrayerRequestCreateManyAndReturnArgs} args - Arguments to create many PrayerRequests.
     * @example
     * // Create many PrayerRequests
     * const prayerRequest = await prisma.prayerRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PrayerRequests and only return the `id`
     * const prayerRequestWithIdOnly = await prisma.prayerRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PrayerRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PrayerRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PrayerRequest.
     * @param {PrayerRequestDeleteArgs} args - Arguments to delete one PrayerRequest.
     * @example
     * // Delete one PrayerRequest
     * const PrayerRequest = await prisma.prayerRequest.delete({
     *   where: {
     *     // ... filter to delete one PrayerRequest
     *   }
     * })
     *
     */
    delete<T extends PrayerRequestDeleteArgs>(args: Prisma.SelectSubset<T, PrayerRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__PrayerRequestClient<runtime.Types.Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PrayerRequest.
     * @param {PrayerRequestUpdateArgs} args - Arguments to update one PrayerRequest.
     * @example
     * // Update one PrayerRequest
     * const prayerRequest = await prisma.prayerRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PrayerRequestUpdateArgs>(args: Prisma.SelectSubset<T, PrayerRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__PrayerRequestClient<runtime.Types.Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PrayerRequests.
     * @param {PrayerRequestDeleteManyArgs} args - Arguments to filter PrayerRequests to delete.
     * @example
     * // Delete a few PrayerRequests
     * const { count } = await prisma.prayerRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PrayerRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, PrayerRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PrayerRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrayerRequests
     * const prayerRequest = await prisma.prayerRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PrayerRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, PrayerRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PrayerRequests and returns the data updated in the database.
     * @param {PrayerRequestUpdateManyAndReturnArgs} args - Arguments to update many PrayerRequests.
     * @example
     * // Update many PrayerRequests
     * const prayerRequest = await prisma.prayerRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PrayerRequests and only return the `id`
     * const prayerRequestWithIdOnly = await prisma.prayerRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrayerRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PrayerRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PrayerRequest.
     * @param {PrayerRequestUpsertArgs} args - Arguments to update or create a PrayerRequest.
     * @example
     * // Update or create a PrayerRequest
     * const prayerRequest = await prisma.prayerRequest.upsert({
     *   create: {
     *     // ... data to create a PrayerRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrayerRequest we want to update
     *   }
     * })
     */
    upsert<T extends PrayerRequestUpsertArgs>(args: Prisma.SelectSubset<T, PrayerRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__PrayerRequestClient<runtime.Types.Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PrayerRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerRequestCountArgs} args - Arguments to filter PrayerRequests to count.
     * @example
     * // Count the number of PrayerRequests
     * const count = await prisma.prayerRequest.count({
     *   where: {
     *     // ... the filter for the PrayerRequests we want to count
     *   }
     * })
    **/
    count<T extends PrayerRequestCountArgs>(args?: Prisma.Subset<T, PrayerRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PrayerRequestCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PrayerRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrayerRequestAggregateArgs>(args: Prisma.Subset<T, PrayerRequestAggregateArgs>): Prisma.PrismaPromise<GetPrayerRequestAggregateType<T>>;
    /**
     * Group by PrayerRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerRequestGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PrayerRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PrayerRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: PrayerRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PrayerRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrayerRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PrayerRequest model
     */
    readonly fields: PrayerRequestFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PrayerRequest.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PrayerRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    prayers<T extends Prisma.PrayerRequest$prayersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PrayerRequest$prayersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the PrayerRequest model
 */
export interface PrayerRequestFieldRefs {
    readonly id: Prisma.FieldRef<"PrayerRequest", 'String'>;
    readonly title: Prisma.FieldRef<"PrayerRequest", 'String'>;
    readonly description: Prisma.FieldRef<"PrayerRequest", 'String'>;
    readonly isAnonymous: Prisma.FieldRef<"PrayerRequest", 'Boolean'>;
    readonly status: Prisma.FieldRef<"PrayerRequest", 'String'>;
    readonly prayerCount: Prisma.FieldRef<"PrayerRequest", 'Int'>;
    readonly created_at: Prisma.FieldRef<"PrayerRequest", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"PrayerRequest", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"PrayerRequest", 'String'>;
}
/**
 * PrayerRequest findUnique
 */
export type PrayerRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: Prisma.PrayerRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: Prisma.PrayerRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrayerRequestInclude<ExtArgs> | null;
    /**
     * Filter, which PrayerRequest to fetch.
     */
    where: Prisma.PrayerRequestWhereUniqueInput;
};
/**
 * PrayerRequest findUniqueOrThrow
 */
export type PrayerRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: Prisma.PrayerRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: Prisma.PrayerRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrayerRequestInclude<ExtArgs> | null;
    /**
     * Filter, which PrayerRequest to fetch.
     */
    where: Prisma.PrayerRequestWhereUniqueInput;
};
/**
 * PrayerRequest findFirst
 */
export type PrayerRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: Prisma.PrayerRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: Prisma.PrayerRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrayerRequestInclude<ExtArgs> | null;
    /**
     * Filter, which PrayerRequest to fetch.
     */
    where?: Prisma.PrayerRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PrayerRequests to fetch.
     */
    orderBy?: Prisma.PrayerRequestOrderByWithRelationInput | Prisma.PrayerRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PrayerRequests.
     */
    cursor?: Prisma.PrayerRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PrayerRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PrayerRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PrayerRequests.
     */
    distinct?: Prisma.PrayerRequestScalarFieldEnum | Prisma.PrayerRequestScalarFieldEnum[];
};
/**
 * PrayerRequest findFirstOrThrow
 */
export type PrayerRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: Prisma.PrayerRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: Prisma.PrayerRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrayerRequestInclude<ExtArgs> | null;
    /**
     * Filter, which PrayerRequest to fetch.
     */
    where?: Prisma.PrayerRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PrayerRequests to fetch.
     */
    orderBy?: Prisma.PrayerRequestOrderByWithRelationInput | Prisma.PrayerRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PrayerRequests.
     */
    cursor?: Prisma.PrayerRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PrayerRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PrayerRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PrayerRequests.
     */
    distinct?: Prisma.PrayerRequestScalarFieldEnum | Prisma.PrayerRequestScalarFieldEnum[];
};
/**
 * PrayerRequest findMany
 */
export type PrayerRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: Prisma.PrayerRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: Prisma.PrayerRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrayerRequestInclude<ExtArgs> | null;
    /**
     * Filter, which PrayerRequests to fetch.
     */
    where?: Prisma.PrayerRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PrayerRequests to fetch.
     */
    orderBy?: Prisma.PrayerRequestOrderByWithRelationInput | Prisma.PrayerRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PrayerRequests.
     */
    cursor?: Prisma.PrayerRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PrayerRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PrayerRequests.
     */
    skip?: number;
    distinct?: Prisma.PrayerRequestScalarFieldEnum | Prisma.PrayerRequestScalarFieldEnum[];
};
/**
 * PrayerRequest create
 */
export type PrayerRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: Prisma.PrayerRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: Prisma.PrayerRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrayerRequestInclude<ExtArgs> | null;
    /**
     * The data needed to create a PrayerRequest.
     */
    data: Prisma.XOR<Prisma.PrayerRequestCreateInput, Prisma.PrayerRequestUncheckedCreateInput>;
};
/**
 * PrayerRequest createMany
 */
export type PrayerRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrayerRequests.
     */
    data: Prisma.PrayerRequestCreateManyInput | Prisma.PrayerRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PrayerRequest createManyAndReturn
 */
export type PrayerRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: Prisma.PrayerRequestSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: Prisma.PrayerRequestOmit<ExtArgs> | null;
    /**
     * The data used to create many PrayerRequests.
     */
    data: Prisma.PrayerRequestCreateManyInput | Prisma.PrayerRequestCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrayerRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PrayerRequest update
 */
export type PrayerRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: Prisma.PrayerRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: Prisma.PrayerRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrayerRequestInclude<ExtArgs> | null;
    /**
     * The data needed to update a PrayerRequest.
     */
    data: Prisma.XOR<Prisma.PrayerRequestUpdateInput, Prisma.PrayerRequestUncheckedUpdateInput>;
    /**
     * Choose, which PrayerRequest to update.
     */
    where: Prisma.PrayerRequestWhereUniqueInput;
};
/**
 * PrayerRequest updateMany
 */
export type PrayerRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PrayerRequests.
     */
    data: Prisma.XOR<Prisma.PrayerRequestUpdateManyMutationInput, Prisma.PrayerRequestUncheckedUpdateManyInput>;
    /**
     * Filter which PrayerRequests to update
     */
    where?: Prisma.PrayerRequestWhereInput;
    /**
     * Limit how many PrayerRequests to update.
     */
    limit?: number;
};
/**
 * PrayerRequest updateManyAndReturn
 */
export type PrayerRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: Prisma.PrayerRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: Prisma.PrayerRequestOmit<ExtArgs> | null;
    /**
     * The data used to update PrayerRequests.
     */
    data: Prisma.XOR<Prisma.PrayerRequestUpdateManyMutationInput, Prisma.PrayerRequestUncheckedUpdateManyInput>;
    /**
     * Filter which PrayerRequests to update
     */
    where?: Prisma.PrayerRequestWhereInput;
    /**
     * Limit how many PrayerRequests to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrayerRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PrayerRequest upsert
 */
export type PrayerRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: Prisma.PrayerRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: Prisma.PrayerRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrayerRequestInclude<ExtArgs> | null;
    /**
     * The filter to search for the PrayerRequest to update in case it exists.
     */
    where: Prisma.PrayerRequestWhereUniqueInput;
    /**
     * In case the PrayerRequest found by the `where` argument doesn't exist, create a new PrayerRequest with this data.
     */
    create: Prisma.XOR<Prisma.PrayerRequestCreateInput, Prisma.PrayerRequestUncheckedCreateInput>;
    /**
     * In case the PrayerRequest was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PrayerRequestUpdateInput, Prisma.PrayerRequestUncheckedUpdateInput>;
};
/**
 * PrayerRequest delete
 */
export type PrayerRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: Prisma.PrayerRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: Prisma.PrayerRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrayerRequestInclude<ExtArgs> | null;
    /**
     * Filter which PrayerRequest to delete.
     */
    where: Prisma.PrayerRequestWhereUniqueInput;
};
/**
 * PrayerRequest deleteMany
 */
export type PrayerRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PrayerRequests to delete
     */
    where?: Prisma.PrayerRequestWhereInput;
    /**
     * Limit how many PrayerRequests to delete.
     */
    limit?: number;
};
/**
 * PrayerRequest.prayers
 */
export type PrayerRequest$prayersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: Prisma.PrayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Prayer
     */
    omit?: Prisma.PrayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrayerInclude<ExtArgs> | null;
    where?: Prisma.PrayerWhereInput;
    orderBy?: Prisma.PrayerOrderByWithRelationInput | Prisma.PrayerOrderByWithRelationInput[];
    cursor?: Prisma.PrayerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrayerScalarFieldEnum | Prisma.PrayerScalarFieldEnum[];
};
/**
 * PrayerRequest without action
 */
export type PrayerRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerRequest
     */
    select?: Prisma.PrayerRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrayerRequest
     */
    omit?: Prisma.PrayerRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrayerRequestInclude<ExtArgs> | null;
};
export {};
