import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBorrower = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Borrower, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly businessType?: string | null;
  readonly businessActivity?: string | null;
  readonly businessLocation?: string | null;
  readonly picOfBusinessArea?: string | null;
  readonly picOfOwnerInBusiness?: string | null;
  readonly picOfOutsideOfBusiness?: string | null;
  readonly lastWeekSales?: number | null;
  readonly preLastWeekSales?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBorrower = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Borrower, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly businessType?: string | null;
  readonly businessActivity?: string | null;
  readonly businessLocation?: string | null;
  readonly picOfBusinessArea?: string | null;
  readonly picOfOwnerInBusiness?: string | null;
  readonly picOfOutsideOfBusiness?: string | null;
  readonly lastWeekSales?: number | null;
  readonly preLastWeekSales?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Borrower = LazyLoading extends LazyLoadingDisabled ? EagerBorrower : LazyBorrower

export declare const Borrower: (new (init: ModelInit<Borrower>) => Borrower) & {
  copyOf(source: Borrower, mutator: (draft: MutableModel<Borrower>) => MutableModel<Borrower> | void): Borrower;
}