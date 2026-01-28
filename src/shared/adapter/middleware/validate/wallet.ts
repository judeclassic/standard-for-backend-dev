// validators/IsValidWalletAddresses.ts
import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments,
  } from 'class-validator';
  
  const walletPatterns: Record<string, RegExp> = {
    BSC: /^0x[a-fA-F0-9]{40}$/,
    Ton: /^[A-Za-z0-9\-_]{48}$/,
  };
  
  export function IsValidWalletAddresses(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        name: 'IsValidWalletAddresses',
        target: object.constructor,
        propertyName,
        options: validationOptions,
        validator: {
          validate(value: Record<string, string>, args: ValidationArguments) {
            const dto = args.object as any;
            const supportedChains: string[] = dto.supported_chains;
  
            if (!supportedChains || !Array.isArray(supportedChains)) return false;
            for (const chain of supportedChains) {
              const wallet = value?.[chain];
              const pattern = walletPatterns[chain];
              if (!pattern || !wallet || !pattern.test(wallet)) {
                return false;
              }
            }
            return true;
          },
          defaultMessage(args: ValidationArguments) {
            return `One or more wallet addresses are invalid based on their chain format.`;
          },
        },
      });
    };
  }
  