'use client';

import { useEffect, use } from 'react';
import { useApp } from '@/hooks/AppProvider';
import { CheckCircle, XCircle, Clock, AlertTriangle, ArrowRight, Wallet } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PageProps {
  params: Promise<{
    paymentId: string;
    referenceId: string;
    state: string;
    paymentType: string;
  }>;
}

export default function PaymentReturnPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const { paymentId, referenceId, state } = resolvedParams;
  const { refreshBalance, isAuthenticated } = useApp();

  useEffect(() => {
    if (isAuthenticated && paymentId) {
      // Call status endpoint to verify and sync transaction state from PayAdmit
      fetch(`/api/wallet/status?paymentId=${paymentId}`)
        .finally(() => {
          refreshBalance();
        });
    }
  }, [isAuthenticated, paymentId, refreshBalance]);

  // Determine configuration based on payment state
  const isCompleted = state.toUpperCase() === 'COMPLETED';
  const isPending = ['PENDING', 'AWAITING_WEBHOOK', 'AWAITING_REDIRECT', 'AWAITING_RETURN', 'PARTIAL_COMPLETE', 'RECONCILIATION'].includes(state.toUpperCase());
  const isDeclined = ['DECLINED', 'CANCELLED', 'ERROR'].includes(state.toUpperCase());

  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isCompleted && (
          <div className="rounded-3xl border border-success/30 bg-success/5 p-10 backdrop-blur-md shadow-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
              <CheckCircle className="h-10 w-10 text-success" />
            </div>
            <h2 className="text-3xl font-extrabold text-text mb-4">Payment Successful!</h2>
            <p className="text-text-light mb-8 max-w-md mx-auto">
              Your wallet balance has been topped up. The transaction has been processed successfully.
            </p>

            <div className="rounded-2xl bg-surface/50 border border-border p-5 text-sm text-left space-y-3 mb-8">
              <div className="flex justify-between">
                <span className="text-text-light">Payment ID</span>
                <span className="font-mono text-text font-medium select-all">{paymentId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-light">Reference ID</span>
                <span className="font-mono text-text font-medium select-all">{referenceId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-light">Status</span>
                <span className="font-semibold text-success uppercase">{state}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/locations"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary-dark shadow-md"
              >
                Browse eSIMs <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/account"
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3 font-semibold text-text transition-colors hover:bg-surface"
              >
                <Wallet className="h-4 w-4 text-text-light" /> View Wallet
              </Link>
            </div>
          </div>
        )}

        {isPending && (
          <div className="rounded-3xl border border-warning/30 bg-warning/5 p-10 backdrop-blur-md shadow-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-warning/10 animate-pulse">
              <Clock className="h-10 w-10 text-warning" />
            </div>
            <h2 className="text-3xl font-extrabold text-text mb-4">Verification Pending</h2>
            <p className="text-text-light mb-8 max-w-md mx-auto">
              Your payment is currently undergoing confirmation. Your balance will be updated automatically once complete.
            </p>

            <div className="rounded-2xl bg-surface/50 border border-border p-5 text-sm text-left space-y-3 mb-8">
              <div className="flex justify-between">
                <span className="text-text-light">Payment ID</span>
                <span className="font-mono text-text font-medium select-all">{paymentId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-light">Reference ID</span>
                <span className="font-mono text-text font-medium select-all">{referenceId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-light">Status</span>
                <span className="font-semibold text-warning uppercase">{state}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/account"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary-dark shadow-md"
              >
                Go to Account <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}

        {isDeclined && (
          <div className="rounded-3xl border border-danger/30 bg-danger/5 p-10 backdrop-blur-md shadow-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-danger/10">
              <XCircle className="h-10 w-10 text-danger" />
            </div>
            <h2 className="text-3xl font-extrabold text-text mb-4">Payment Failed</h2>
            <p className="text-text-light mb-8 max-w-md mx-auto">
              The transaction was declined by the bank or payment processor. Please verify your details or use a different card.
            </p>

            <div className="rounded-2xl bg-surface/50 border border-border p-5 text-sm text-left space-y-3 mb-8">
              <div className="flex justify-between">
                <span className="text-text-light">Reference ID</span>
                <span className="font-mono text-text font-medium select-all">{referenceId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-light">Reason</span>
                <span className="font-semibold text-danger uppercase">{state}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/top-up"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary-dark shadow-md"
              >
                Try Again
              </Link>
            </div>
          </div>
        )}

        {!isCompleted && !isPending && !isDeclined && (
          <div className="rounded-3xl border border-border bg-surface p-10 shadow-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-border">
              <AlertTriangle className="h-10 w-10 text-text-light" />
            </div>
            <h2 className="text-3xl font-extrabold text-text mb-4">Unknown State</h2>
            <p className="text-text-light mb-8 max-w-md mx-auto">
              We received an unrecognized payment status of &quot;{state}&quot;.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/account"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary-dark shadow-md"
              >
                Go to Account
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
