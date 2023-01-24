import { Injectable } from '@angular/core';
import * as e from 'express';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private algorithm = 'aes-256-ctr';
    private secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
    constructor() { }

    getToken(): string | null {
        return JSON.parse(localStorage.getItem('accessToken') + '');
    }

    setItemWithoutEncryption(item: string) {
        console.log(item)
        localStorage.setItem('User', JSON.stringify(item));
    }

    settokenWithoutEncryption(item: string) {
        console.log(item)
        localStorage.setItem('accessToken', JSON.stringify(item));
    }

    getItemWithoutEncryption(key: string): string {
        const checkItem: string | null = localStorage.getItem(key);
        if (checkItem) {
            return checkItem;
        } else {
            return '';
        }
    }
    setItem(key: string, item: string) {
        localStorage.setItem(key, JSON.stringify(this.encrypt(item)));
    }

    getItem(key: string) {
        const checkItem = localStorage.getItem(key);
        if (checkItem) {
            const item = this.decrypt(localStorage.getItem(key));
            return item;
        } else {
            return '';
        }
    }
    encrypt(text: string) {
        // const iv = crypto.randomBytes(16);
        // const cipher = crypto.createCipheriv(this.algorithm, this.secretKey, iv);
        // const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
        // return {
        //   iv: iv.toString('hex'),
        //   content: encrypted.toString('hex'),
        // };
    }

    decrypt(hashStr: any) {
        // const hash = JSON.parse(hashStr);
        // const decipher = crypto.createDecipheriv(
        //   this.algorithm,
        //   this.secretKey,
        //   Buffer.from(hash.iv, 'hex')
        // );
        // const decrpyted = Buffer.concat([
        //   decipher.update(Buffer.from(hash.content, 'hex')),
        //   decipher.final(),
        // ]);
        // return decrpyted.toString();
    }
}
