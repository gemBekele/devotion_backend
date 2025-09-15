/**
 * This file exports the `Prayer` model and its related types.
 *
 * 🟢 You can import this file directly.
 */
import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Prayer
 *
 */
export type PrayerModel = runtime.Types.Result.DefaultSelection<Prisma.$PrayerPayload>;
export type AggregatePrayer = {
    _count: PrayerCountAggregateOutputType | null;
    _min: PrayerMinAggregateOutputType | null;
    _max: PrayerMaxAggregateOutputType | null;
};
export type PrayerMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    userId: string | null;
    prayerRequestId: string | null;
};
export type PrayerMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    userId: string | null;
    prayerRequestId: string | null;
};
export type PrayerCountAggregateOutputType = {
    id: number;
    created_at: number;
    userId: number;
    prayerRequestId: number;
    _all: number;
};
export type PrayerMinAggregateInputType = {
    id?: true;
    created_at?: true;
    userId?: true;
    prayerRequestId?: true;
};
export type PrayerMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    userId?: true;
    prayerRequestId?: true;
};
export type PrayerCountAggregateInputType = {
    id?: true;
    created_at?: true;
    userId?: true;
    prayerRequestId?: true;
    _all?: true;
};
export type PrayerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Prayer to aggregate.
     */
    where?: Prisma.PrayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Prayers to fetch.
     */
    orderBy?: Prisma.PrayerOrderByWithRelationInput | Prisma.PrayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PrayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Prayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Prayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Prayers
    **/
    _count?: true | PrayerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PrayerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PrayerMaxAggregateInputType;
};
export type GetPrayerAggregateType<T extends PrayerAggregateArgs> = {
    [P in keyof T & keyof AggregatePrayer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrayer[P]> : Prisma.GetScalarType<T[P], AggregatePrayer[P]>;
};
export type PrayerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrayerWhereInput;
    orderBy?: Prisma.PrayerOrderByWithAggregationInput | Prisma.PrayerOrderByWithAggregationInput[];
    by: Prisma.PrayerScalarFieldEnum[] | Prisma.PrayerScalarFieldEnum;
    having?: Prisma.PrayerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PrayerCountAggregateInputType | true;
    _min?: PrayerMinAggregateInputType;
    _max?: PrayerMaxAggregateInputType;
};
export type PrayerGroupByOutputType = {
    id: string;
    created_at: Date;
    userId: string;
    prayerRequestId: string;
    _count: PrayerCountAggregateOutputType | null;
    _min: PrayerMinAggregateOutputType | null;
    _max: PrayerMaxAggregateOutputType | null;
};
type GetPrayerGroupByPayload<T extends PrayerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PrayerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PrayerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PrayerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PrayerGroupByOutputType[P]>;
}>>;
export type PrayerWhereInput = {
    AND?: Prisma.PrayerWhereInput | Prisma.PrayerWhereInput[];
    OR?: Prisma.PrayerWhereInput[];
    NOT?: Prisma.PrayerWhereInput | Prisma.PrayerWhereInput[];
    id?: Prisma.StringFilter<"Prayer"> | string;
    created_at?: Prisma.DateTimeFilter<"Prayer"> | Date | string;
    userId?: Prisma.StringFilter<"Prayer"> | string;
    prayerRequestId?: Prisma.StringFilter<"Prayer"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    prayerRequest?: Prisma.XOR<Prisma.PrayerRequestScalarRelationFilter, Prisma.PrayerRequestWhereInput>;
};
export type PrayerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    prayerRequestId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    prayerRequest?: Prisma.PrayerRequestOrderByWithRelationInput;
};
export type PrayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_prayerRequestId?: Prisma.PrayerUserIdPrayerRequestIdCompoundUniqueInput;
    AND?: Prisma.PrayerWhereInput | Prisma.PrayerWhereInput[];
    OR?: Prisma.PrayerWhereInput[];
    NOT?: Prisma.PrayerWhereInput | Prisma.PrayerWhereInput[];
    created_at?: Prisma.DateTimeFilter<"Prayer"> | Date | string;
    userId?: Prisma.StringFilter<"Prayer"> | string;
    prayerRequestId?: Prisma.StringFilter<"Prayer"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    prayerRequest?: Prisma.XOR<Prisma.PrayerRequestScalarRelationFilter, Prisma.PrayerRequestWhereInput>;
}, "id" | "userId_prayerRequestId">;
export type PrayerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    prayerRequestId?: Prisma.SortOrder;
    _count?: Prisma.PrayerCountOrderByAggregateInput;
    _max?: Prisma.PrayerMaxOrderByAggregateInput;
    _min?: Prisma.PrayerMinOrderByAggregateInput;
};
export type PrayerScalarWhereWithAggregatesInput = {
    AND?: Prisma.PrayerScalarWhereWithAggregatesInput | Prisma.PrayerScalarWhereWithAggregatesInput[];
    OR?: Prisma.PrayerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PrayerScalarWhereWithAggregatesInput | Prisma.PrayerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Prayer"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Prayer"> | Date | string;
    userId?: Prisma.StringWithAggregatesFilter<"Prayer"> | string;
    prayerRequestId?: Prisma.StringWithAggregatesFilter<"Prayer"> | string;
};
export type PrayerCreateInput = {
    id?: string;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPrayersInput;
    prayerRequest: Prisma.PrayerRequestCreateNestedOneWithoutPrayersInput;
};
export type PrayerUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    userId: string;
    prayerRequestId: string;
};
export type PrayerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPrayersNestedInput;
    prayerRequest?: Prisma.PrayerRequestUpdateOneRequiredWithoutPrayersNestedInput;
};
export type PrayerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    prayerRequestId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PrayerCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    userId: string;
    prayerRequestId: string;
};
export type PrayerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrayerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    prayerRequestId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PrayerListRelationFilter = {
    every?: Prisma.PrayerWhereInput;
    some?: Prisma.PrayerWhereInput;
    none?: Prisma.PrayerWhereInput;
};
export type PrayerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PrayerUserIdPrayerRequestIdCompoundUniqueInput = {
    userId: string;
    prayerRequestId: string;
};
export type PrayerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    prayerRequestId?: Prisma.SortOrder;
};
export type PrayerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    prayerRequestId?: Prisma.SortOrder;
};
export type PrayerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    prayerRequestId?: Prisma.SortOrder;
};
export type PrayerCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PrayerCreateWithoutUserInput, Prisma.PrayerUncheckedCreateWithoutUserInput> | Prisma.PrayerCreateWithoutUserInput[] | Prisma.PrayerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PrayerCreateOrConnectWithoutUserInput | Prisma.PrayerCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PrayerCreateManyUserInputEnvelope;
    connect?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
};
export type PrayerUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PrayerCreateWithoutUserInput, Prisma.PrayerUncheckedCreateWithoutUserInput> | Prisma.PrayerCreateWithoutUserInput[] | Prisma.PrayerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PrayerCreateOrConnectWithoutUserInput | Prisma.PrayerCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PrayerCreateManyUserInputEnvelope;
    connect?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
};
export type PrayerUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PrayerCreateWithoutUserInput, Prisma.PrayerUncheckedCreateWithoutUserInput> | Prisma.PrayerCreateWithoutUserInput[] | Prisma.PrayerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PrayerCreateOrConnectWithoutUserInput | Prisma.PrayerCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PrayerUpsertWithWhereUniqueWithoutUserInput | Prisma.PrayerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PrayerCreateManyUserInputEnvelope;
    set?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
    disconnect?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
    delete?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
    connect?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
    update?: Prisma.PrayerUpdateWithWhereUniqueWithoutUserInput | Prisma.PrayerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PrayerUpdateManyWithWhereWithoutUserInput | Prisma.PrayerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PrayerScalarWhereInput | Prisma.PrayerScalarWhereInput[];
};
export type PrayerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PrayerCreateWithoutUserInput, Prisma.PrayerUncheckedCreateWithoutUserInput> | Prisma.PrayerCreateWithoutUserInput[] | Prisma.PrayerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PrayerCreateOrConnectWithoutUserInput | Prisma.PrayerCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PrayerUpsertWithWhereUniqueWithoutUserInput | Prisma.PrayerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PrayerCreateManyUserInputEnvelope;
    set?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
    disconnect?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
    delete?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
    connect?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
    update?: Prisma.PrayerUpdateWithWhereUniqueWithoutUserInput | Prisma.PrayerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PrayerUpdateManyWithWhereWithoutUserInput | Prisma.PrayerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PrayerScalarWhereInput | Prisma.PrayerScalarWhereInput[];
};
export type PrayerCreateNestedManyWithoutPrayerRequestInput = {
    create?: Prisma.XOR<Prisma.PrayerCreateWithoutPrayerRequestInput, Prisma.PrayerUncheckedCreateWithoutPrayerRequestInput> | Prisma.PrayerCreateWithoutPrayerRequestInput[] | Prisma.PrayerUncheckedCreateWithoutPrayerRequestInput[];
    connectOrCreate?: Prisma.PrayerCreateOrConnectWithoutPrayerRequestInput | Prisma.PrayerCreateOrConnectWithoutPrayerRequestInput[];
    createMany?: Prisma.PrayerCreateManyPrayerRequestInputEnvelope;
    connect?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
};
export type PrayerUncheckedCreateNestedManyWithoutPrayerRequestInput = {
    create?: Prisma.XOR<Prisma.PrayerCreateWithoutPrayerRequestInput, Prisma.PrayerUncheckedCreateWithoutPrayerRequestInput> | Prisma.PrayerCreateWithoutPrayerRequestInput[] | Prisma.PrayerUncheckedCreateWithoutPrayerRequestInput[];
    connectOrCreate?: Prisma.PrayerCreateOrConnectWithoutPrayerRequestInput | Prisma.PrayerCreateOrConnectWithoutPrayerRequestInput[];
    createMany?: Prisma.PrayerCreateManyPrayerRequestInputEnvelope;
    connect?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
};
export type PrayerUpdateManyWithoutPrayerRequestNestedInput = {
    create?: Prisma.XOR<Prisma.PrayerCreateWithoutPrayerRequestInput, Prisma.PrayerUncheckedCreateWithoutPrayerRequestInput> | Prisma.PrayerCreateWithoutPrayerRequestInput[] | Prisma.PrayerUncheckedCreateWithoutPrayerRequestInput[];
    connectOrCreate?: Prisma.PrayerCreateOrConnectWithoutPrayerRequestInput | Prisma.PrayerCreateOrConnectWithoutPrayerRequestInput[];
    upsert?: Prisma.PrayerUpsertWithWhereUniqueWithoutPrayerRequestInput | Prisma.PrayerUpsertWithWhereUniqueWithoutPrayerRequestInput[];
    createMany?: Prisma.PrayerCreateManyPrayerRequestInputEnvelope;
    set?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
    disconnect?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
    delete?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
    connect?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
    update?: Prisma.PrayerUpdateWithWhereUniqueWithoutPrayerRequestInput | Prisma.PrayerUpdateWithWhereUniqueWithoutPrayerRequestInput[];
    updateMany?: Prisma.PrayerUpdateManyWithWhereWithoutPrayerRequestInput | Prisma.PrayerUpdateManyWithWhereWithoutPrayerRequestInput[];
    deleteMany?: Prisma.PrayerScalarWhereInput | Prisma.PrayerScalarWhereInput[];
};
export type PrayerUncheckedUpdateManyWithoutPrayerRequestNestedInput = {
    create?: Prisma.XOR<Prisma.PrayerCreateWithoutPrayerRequestInput, Prisma.PrayerUncheckedCreateWithoutPrayerRequestInput> | Prisma.PrayerCreateWithoutPrayerRequestInput[] | Prisma.PrayerUncheckedCreateWithoutPrayerRequestInput[];
    connectOrCreate?: Prisma.PrayerCreateOrConnectWithoutPrayerRequestInput | Prisma.PrayerCreateOrConnectWithoutPrayerRequestInput[];
    upsert?: Prisma.PrayerUpsertWithWhereUniqueWithoutPrayerRequestInput | Prisma.PrayerUpsertWithWhereUniqueWithoutPrayerRequestInput[];
    createMany?: Prisma.PrayerCreateManyPrayerRequestInputEnvelope;
    set?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
    disconnect?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
    delete?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
    connect?: Prisma.PrayerWhereUniqueInput | Prisma.PrayerWhereUniqueInput[];
    update?: Prisma.PrayerUpdateWithWhereUniqueWithoutPrayerRequestInput | Prisma.PrayerUpdateWithWhereUniqueWithoutPrayerRequestInput[];
    updateMany?: Prisma.PrayerUpdateManyWithWhereWithoutPrayerRequestInput | Prisma.PrayerUpdateManyWithWhereWithoutPrayerRequestInput[];
    deleteMany?: Prisma.PrayerScalarWhereInput | Prisma.PrayerScalarWhereInput[];
};
export type PrayerCreateWithoutUserInput = {
    id?: string;
    created_at?: Date | string;
    prayerRequest: Prisma.PrayerRequestCreateNestedOneWithoutPrayersInput;
};
export type PrayerUncheckedCreateWithoutUserInput = {
    id?: string;
    created_at?: Date | string;
    prayerRequestId: string;
};
export type PrayerCreateOrConnectWithoutUserInput = {
    where: Prisma.PrayerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrayerCreateWithoutUserInput, Prisma.PrayerUncheckedCreateWithoutUserInput>;
};
export type PrayerCreateManyUserInputEnvelope = {
    data: Prisma.PrayerCreateManyUserInput | Prisma.PrayerCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PrayerUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PrayerWhereUniqueInput;
    update: Prisma.XOR<Prisma.PrayerUpdateWithoutUserInput, Prisma.PrayerUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PrayerCreateWithoutUserInput, Prisma.PrayerUncheckedCreateWithoutUserInput>;
};
export type PrayerUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PrayerWhereUniqueInput;
    data: Prisma.XOR<Prisma.PrayerUpdateWithoutUserInput, Prisma.PrayerUncheckedUpdateWithoutUserInput>;
};
export type PrayerUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PrayerScalarWhereInput;
    data: Prisma.XOR<Prisma.PrayerUpdateManyMutationInput, Prisma.PrayerUncheckedUpdateManyWithoutUserInput>;
};
export type PrayerScalarWhereInput = {
    AND?: Prisma.PrayerScalarWhereInput | Prisma.PrayerScalarWhereInput[];
    OR?: Prisma.PrayerScalarWhereInput[];
    NOT?: Prisma.PrayerScalarWhereInput | Prisma.PrayerScalarWhereInput[];
    id?: Prisma.StringFilter<"Prayer"> | string;
    created_at?: Prisma.DateTimeFilter<"Prayer"> | Date | string;
    userId?: Prisma.StringFilter<"Prayer"> | string;
    prayerRequestId?: Prisma.StringFilter<"Prayer"> | string;
};
export type PrayerCreateWithoutPrayerRequestInput = {
    id?: string;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPrayersInput;
};
export type PrayerUncheckedCreateWithoutPrayerRequestInput = {
    id?: string;
    created_at?: Date | string;
    userId: string;
};
export type PrayerCreateOrConnectWithoutPrayerRequestInput = {
    where: Prisma.PrayerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrayerCreateWithoutPrayerRequestInput, Prisma.PrayerUncheckedCreateWithoutPrayerRequestInput>;
};
export type PrayerCreateManyPrayerRequestInputEnvelope = {
    data: Prisma.PrayerCreateManyPrayerRequestInput | Prisma.PrayerCreateManyPrayerRequestInput[];
    skipDuplicates?: boolean;
};
export type PrayerUpsertWithWhereUniqueWithoutPrayerRequestInput = {
    where: Prisma.PrayerWhereUniqueInput;
    update: Prisma.XOR<Prisma.PrayerUpdateWithoutPrayerRequestInput, Prisma.PrayerUncheckedUpdateWithoutPrayerRequestInput>;
    create: Prisma.XOR<Prisma.PrayerCreateWithoutPrayerRequestInput, Prisma.PrayerUncheckedCreateWithoutPrayerRequestInput>;
};
export type PrayerUpdateWithWhereUniqueWithoutPrayerRequestInput = {
    where: Prisma.PrayerWhereUniqueInput;
    data: Prisma.XOR<Prisma.PrayerUpdateWithoutPrayerRequestInput, Prisma.PrayerUncheckedUpdateWithoutPrayerRequestInput>;
};
export type PrayerUpdateManyWithWhereWithoutPrayerRequestInput = {
    where: Prisma.PrayerScalarWhereInput;
    data: Prisma.XOR<Prisma.PrayerUpdateManyMutationInput, Prisma.PrayerUncheckedUpdateManyWithoutPrayerRequestInput>;
};
export type PrayerCreateManyUserInput = {
    id?: string;
    created_at?: Date | string;
    prayerRequestId: string;
};
export type PrayerUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prayerRequest?: Prisma.PrayerRequestUpdateOneRequiredWithoutPrayersNestedInput;
};
export type PrayerUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prayerRequestId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PrayerUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prayerRequestId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PrayerCreateManyPrayerRequestInput = {
    id?: string;
    created_at?: Date | string;
    userId: string;
};
export type PrayerUpdateWithoutPrayerRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPrayersNestedInput;
};
export type PrayerUncheckedUpdateWithoutPrayerRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PrayerUncheckedUpdateManyWithoutPrayerRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PrayerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    userId?: boolean;
    prayerRequestId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    prayerRequest?: boolean | Prisma.PrayerRequestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prayer"]>;
export type PrayerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    userId?: boolean;
    prayerRequestId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    prayerRequest?: boolean | Prisma.PrayerRequestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prayer"]>;
export type PrayerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    userId?: boolean;
    prayerRequestId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    prayerRequest?: boolean | Prisma.PrayerRequestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prayer"]>;
export type PrayerSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    userId?: boolean;
    prayerRequestId?: boolean;
};
export type PrayerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "created_at" | "userId" | "prayerRequestId", ExtArgs["result"]["prayer"]>;
export type PrayerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    prayerRequest?: boolean | Prisma.PrayerRequestDefaultArgs<ExtArgs>;
};
export type PrayerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    prayerRequest?: boolean | Prisma.PrayerRequestDefaultArgs<ExtArgs>;
};
export type PrayerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    prayerRequest?: boolean | Prisma.PrayerRequestDefaultArgs<ExtArgs>;
};
export type $PrayerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Prayer";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        prayerRequest: Prisma.$PrayerRequestPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        created_at: Date;
        userId: string;
        prayerRequestId: string;
    }, ExtArgs["result"]["prayer"]>;
    composites: {};
};
export type PrayerGetPayload<S extends boolean | null | undefined | PrayerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PrayerPayload, S>;
export type PrayerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PrayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PrayerCountAggregateInputType | true;
};
export interface PrayerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Prayer'];
        meta: {
            name: 'Prayer';
        };
    };
    /**
     * Find zero or one Prayer that matches the filter.
     * @param {PrayerFindUniqueArgs} args - Arguments to find a Prayer
     * @example
     * // Get one Prayer
     * const prayer = await prisma.prayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrayerFindUniqueArgs>(args: Prisma.SelectSubset<T, PrayerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PrayerClient<runtime.Types.Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Prayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrayerFindUniqueOrThrowArgs} args - Arguments to find a Prayer
     * @example
     * // Get one Prayer
     * const prayer = await prisma.prayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrayerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PrayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrayerClient<runtime.Types.Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Prayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerFindFirstArgs} args - Arguments to find a Prayer
     * @example
     * // Get one Prayer
     * const prayer = await prisma.prayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrayerFindFirstArgs>(args?: Prisma.SelectSubset<T, PrayerFindFirstArgs<ExtArgs>>): Prisma.Prisma__PrayerClient<runtime.Types.Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Prayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerFindFirstOrThrowArgs} args - Arguments to find a Prayer
     * @example
     * // Get one Prayer
     * const prayer = await prisma.prayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrayerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PrayerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrayerClient<runtime.Types.Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Prayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prayers
     * const prayers = await prisma.prayer.findMany()
     *
     * // Get first 10 Prayers
     * const prayers = await prisma.prayer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const prayerWithIdOnly = await prisma.prayer.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PrayerFindManyArgs>(args?: Prisma.SelectSubset<T, PrayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Prayer.
     * @param {PrayerCreateArgs} args - Arguments to create a Prayer.
     * @example
     * // Create one Prayer
     * const Prayer = await prisma.prayer.create({
     *   data: {
     *     // ... data to create a Prayer
     *   }
     * })
     *
     */
    create<T extends PrayerCreateArgs>(args: Prisma.SelectSubset<T, PrayerCreateArgs<ExtArgs>>): Prisma.Prisma__PrayerClient<runtime.Types.Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Prayers.
     * @param {PrayerCreateManyArgs} args - Arguments to create many Prayers.
     * @example
     * // Create many Prayers
     * const prayer = await prisma.prayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PrayerCreateManyArgs>(args?: Prisma.SelectSubset<T, PrayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Prayers and returns the data saved in the database.
     * @param {PrayerCreateManyAndReturnArgs} args - Arguments to create many Prayers.
     * @example
     * // Create many Prayers
     * const prayer = await prisma.prayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Prayers and only return the `id`
     * const prayerWithIdOnly = await prisma.prayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PrayerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PrayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Prayer.
     * @param {PrayerDeleteArgs} args - Arguments to delete one Prayer.
     * @example
     * // Delete one Prayer
     * const Prayer = await prisma.prayer.delete({
     *   where: {
     *     // ... filter to delete one Prayer
     *   }
     * })
     *
     */
    delete<T extends PrayerDeleteArgs>(args: Prisma.SelectSubset<T, PrayerDeleteArgs<ExtArgs>>): Prisma.Prisma__PrayerClient<runtime.Types.Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Prayer.
     * @param {PrayerUpdateArgs} args - Arguments to update one Prayer.
     * @example
     * // Update one Prayer
     * const prayer = await prisma.prayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PrayerUpdateArgs>(args: Prisma.SelectSubset<T, PrayerUpdateArgs<ExtArgs>>): Prisma.Prisma__PrayerClient<runtime.Types.Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Prayers.
     * @param {PrayerDeleteManyArgs} args - Arguments to filter Prayers to delete.
     * @example
     * // Delete a few Prayers
     * const { count } = await prisma.prayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PrayerDeleteManyArgs>(args?: Prisma.SelectSubset<T, PrayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Prayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prayers
     * const prayer = await prisma.prayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PrayerUpdateManyArgs>(args: Prisma.SelectSubset<T, PrayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Prayers and returns the data updated in the database.
     * @param {PrayerUpdateManyAndReturnArgs} args - Arguments to update many Prayers.
     * @example
     * // Update many Prayers
     * const prayer = await prisma.prayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Prayers and only return the `id`
     * const prayerWithIdOnly = await prisma.prayer.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrayerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PrayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Prayer.
     * @param {PrayerUpsertArgs} args - Arguments to update or create a Prayer.
     * @example
     * // Update or create a Prayer
     * const prayer = await prisma.prayer.upsert({
     *   create: {
     *     // ... data to create a Prayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prayer we want to update
     *   }
     * })
     */
    upsert<T extends PrayerUpsertArgs>(args: Prisma.SelectSubset<T, PrayerUpsertArgs<ExtArgs>>): Prisma.Prisma__PrayerClient<runtime.Types.Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Prayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerCountArgs} args - Arguments to filter Prayers to count.
     * @example
     * // Count the number of Prayers
     * const count = await prisma.prayer.count({
     *   where: {
     *     // ... the filter for the Prayers we want to count
     *   }
     * })
    **/
    count<T extends PrayerCountArgs>(args?: Prisma.Subset<T, PrayerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PrayerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Prayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrayerAggregateArgs>(args: Prisma.Subset<T, PrayerAggregateArgs>): Prisma.PrismaPromise<GetPrayerAggregateType<T>>;
    /**
     * Group by Prayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PrayerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PrayerGroupByArgs['orderBy'];
    } : {
        orderBy?: PrayerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PrayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Prayer model
     */
    readonly fields: PrayerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Prayer.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PrayerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    prayerRequest<T extends Prisma.PrayerRequestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PrayerRequestDefaultArgs<ExtArgs>>): Prisma.Prisma__PrayerRequestClient<runtime.Types.Result.GetResult<Prisma.$PrayerRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Prayer model
 */
export interface PrayerFieldRefs {
    readonly id: Prisma.FieldRef<"Prayer", 'String'>;
    readonly created_at: Prisma.FieldRef<"Prayer", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"Prayer", 'String'>;
    readonly prayerRequestId: Prisma.FieldRef<"Prayer", 'String'>;
}
/**
 * Prayer findUnique
 */
export type PrayerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Prayer to fetch.
     */
    where: Prisma.PrayerWhereUniqueInput;
};
/**
 * Prayer findUniqueOrThrow
 */
export type PrayerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Prayer to fetch.
     */
    where: Prisma.PrayerWhereUniqueInput;
};
/**
 * Prayer findFirst
 */
export type PrayerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Prayer to fetch.
     */
    where?: Prisma.PrayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Prayers to fetch.
     */
    orderBy?: Prisma.PrayerOrderByWithRelationInput | Prisma.PrayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Prayers.
     */
    cursor?: Prisma.PrayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Prayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Prayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Prayers.
     */
    distinct?: Prisma.PrayerScalarFieldEnum | Prisma.PrayerScalarFieldEnum[];
};
/**
 * Prayer findFirstOrThrow
 */
export type PrayerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Prayer to fetch.
     */
    where?: Prisma.PrayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Prayers to fetch.
     */
    orderBy?: Prisma.PrayerOrderByWithRelationInput | Prisma.PrayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Prayers.
     */
    cursor?: Prisma.PrayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Prayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Prayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Prayers.
     */
    distinct?: Prisma.PrayerScalarFieldEnum | Prisma.PrayerScalarFieldEnum[];
};
/**
 * Prayer findMany
 */
export type PrayerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Prayers to fetch.
     */
    where?: Prisma.PrayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Prayers to fetch.
     */
    orderBy?: Prisma.PrayerOrderByWithRelationInput | Prisma.PrayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Prayers.
     */
    cursor?: Prisma.PrayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Prayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Prayers.
     */
    skip?: number;
    distinct?: Prisma.PrayerScalarFieldEnum | Prisma.PrayerScalarFieldEnum[];
};
/**
 * Prayer create
 */
export type PrayerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Prayer.
     */
    data: Prisma.XOR<Prisma.PrayerCreateInput, Prisma.PrayerUncheckedCreateInput>;
};
/**
 * Prayer createMany
 */
export type PrayerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prayers.
     */
    data: Prisma.PrayerCreateManyInput | Prisma.PrayerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Prayer createManyAndReturn
 */
export type PrayerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: Prisma.PrayerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Prayer
     */
    omit?: Prisma.PrayerOmit<ExtArgs> | null;
    /**
     * The data used to create many Prayers.
     */
    data: Prisma.PrayerCreateManyInput | Prisma.PrayerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrayerIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Prayer update
 */
export type PrayerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Prayer.
     */
    data: Prisma.XOR<Prisma.PrayerUpdateInput, Prisma.PrayerUncheckedUpdateInput>;
    /**
     * Choose, which Prayer to update.
     */
    where: Prisma.PrayerWhereUniqueInput;
};
/**
 * Prayer updateMany
 */
export type PrayerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Prayers.
     */
    data: Prisma.XOR<Prisma.PrayerUpdateManyMutationInput, Prisma.PrayerUncheckedUpdateManyInput>;
    /**
     * Filter which Prayers to update
     */
    where?: Prisma.PrayerWhereInput;
    /**
     * Limit how many Prayers to update.
     */
    limit?: number;
};
/**
 * Prayer updateManyAndReturn
 */
export type PrayerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: Prisma.PrayerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Prayer
     */
    omit?: Prisma.PrayerOmit<ExtArgs> | null;
    /**
     * The data used to update Prayers.
     */
    data: Prisma.XOR<Prisma.PrayerUpdateManyMutationInput, Prisma.PrayerUncheckedUpdateManyInput>;
    /**
     * Filter which Prayers to update
     */
    where?: Prisma.PrayerWhereInput;
    /**
     * Limit how many Prayers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrayerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Prayer upsert
 */
export type PrayerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Prayer to update in case it exists.
     */
    where: Prisma.PrayerWhereUniqueInput;
    /**
     * In case the Prayer found by the `where` argument doesn't exist, create a new Prayer with this data.
     */
    create: Prisma.XOR<Prisma.PrayerCreateInput, Prisma.PrayerUncheckedCreateInput>;
    /**
     * In case the Prayer was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PrayerUpdateInput, Prisma.PrayerUncheckedUpdateInput>;
};
/**
 * Prayer delete
 */
export type PrayerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Prayer to delete.
     */
    where: Prisma.PrayerWhereUniqueInput;
};
/**
 * Prayer deleteMany
 */
export type PrayerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Prayers to delete
     */
    where?: Prisma.PrayerWhereInput;
    /**
     * Limit how many Prayers to delete.
     */
    limit?: number;
};
/**
 * Prayer without action
 */
export type PrayerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
