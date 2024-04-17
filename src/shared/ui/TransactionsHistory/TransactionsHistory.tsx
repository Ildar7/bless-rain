import { classNames } from 'shared/lib/classNames/classNames';
import { formatNumberWithSeparators } from 'shared/lib/helpers/formatNumberWithSeparators/formatNumberWithSeparators';
import cls from './TransactionsHistory.module.scss';

export enum TransactionsInfoTheme {
    OUTLINE = 'outline',
    FILL = 'fill',
}

type TransactionType = 'Deposit' | 'Withdraw';
type TransactionStatus = 'Success' | 'In processing' | 'Error';
export interface TransactionsInfo {
    type: TransactionType;
    value: number;
    date: string;
    signature: string;
    status: TransactionStatus;
}
interface TransactionsHistoryProps {
    className?: string;
    transactions: TransactionsInfo[];
    theme?: TransactionsInfoTheme;
    withMainRow?: boolean;
}
export const TransactionsHistory = (props: TransactionsHistoryProps) => {
    const {
        className,
        transactions,
        withMainRow = true,
        theme = TransactionsInfoTheme.OUTLINE,
    } = props;

    return (
        <div className={classNames(cls.TransactionsHistory, {}, [className, cls[theme]])}>
            {withMainRow && (
                <div className={cls.row}>
                    <div
                        className={classNames(cls.cell, {}, ['caption-md'])}
                    >
                        TYPE
                    </div>
                    <div
                        className={classNames(cls.cell, {}, ['caption-md'])}
                    >
                        VALUE
                    </div>
                    <div
                        className={classNames(cls.cell, {}, ['caption-md'])}
                    >
                        DATE
                    </div>
                    <div
                        className={classNames(cls.cell, {}, ['caption-md'])}
                    >
                        SIGNATURE
                    </div>
                    <div
                        className={classNames(cls.cell, {}, ['caption-md'])}
                    >
                        STATUS
                    </div>
                </div>
            )}
            {
                transactions.map((transaction, index) => (
                    <div
                        className={cls.row}
                        key={transaction.signature + index}
                    >
                        <div
                            className={classNames(
                                cls.cell,
                                {},
                                [cls[transaction.type.toLowerCase()], 'caption-lg'],
                            )}
                        >
                            {transaction.type}
                        </div>
                        <div
                            className={classNames(cls.cell, {}, [cls.value, 'caption-lg'])}
                        >
                            {formatNumberWithSeparators(transaction.value, true)}
                        </div>
                        <div
                            className={classNames(cls.cell, {}, [cls.date, 'caption-lg'])}
                        >
                            {transaction.date}
                        </div>
                        <div
                            className={classNames(cls.cell, {}, ['caption-lg'])}
                        >
                            {transaction.signature}
                        </div>
                        <div
                            className={classNames(
                                cls.cell,
                                {},
                                [
                                    cls[transaction.status === 'In processing'
                                        ? 'inProcess'
                                        : transaction.status.toLowerCase()],
                                    'caption-lg',
                                ],
                            )}
                        >
                            {transaction.status}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
