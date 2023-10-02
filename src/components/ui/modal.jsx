"use client"

import * as React from "react"
import * as ModalPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/utils/utils"
import { buttonVariants } from "@/components/ui/button"

const Modal = ModalPrimitive.Root

const ModalTrigger = ModalPrimitive.Trigger

const ModalPortal = ({
  className,
  ...props
}) => (
  <ModalPrimitive.Portal className={cn(className)} {...props} />
)
ModalPortal.displayName = ModalPrimitive.Portal.displayName

const ModalOverlay = React.forwardRef(({ className, children, ...props }, ref) => (
  <ModalPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref} />
))
ModalOverlay.displayName = ModalPrimitive.Overlay.displayName

const ModalContent = React.forwardRef(({ className, ...props }, ref) => (
  <ModalPortal>
    <ModalOverlay />
    <ModalPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-7xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        className
      )}
      {...props} />
  </ModalPortal>
))
ModalContent.displayName = ModalPrimitive.Content.displayName

const ModalHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props} />
)
ModalHeader.displayName = "ModalHeader"

const ModalFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-center sm:space-x-2", className)}
    {...props} />
)
ModalFooter.displayName = "ModalFooter"

const ModalTitle = React.forwardRef(({ className, ...props }, ref) => (
  <ModalPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
))
ModalTitle.displayName = ModalPrimitive.Title.displayName

const ModalDescription = React.forwardRef(({ className, ...props }, ref) => (
  <ModalPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
ModalDescription.displayName =
  ModalPrimitive.Description.displayName

const ModalAction = React.forwardRef(({ className, ...props }, ref) => (
  <ModalPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
))
ModalAction.displayName = ModalPrimitive.Action.displayName

const ModalCancel = React.forwardRef(({ className, ...props }, ref) => (
  <ModalPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props} />
))
ModalCancel.displayName = ModalPrimitive.Cancel.displayName

export {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
  ModalAction,
  ModalCancel,
}
