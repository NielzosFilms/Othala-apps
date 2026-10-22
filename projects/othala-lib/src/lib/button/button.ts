import { Component, input, InputSignal } from '@angular/core';

export type ButtonType = 'primary' | 'secondary' | 'ghost' | 'danger'

@Component({
    imports: [],
    selector: 'othala-button',
    styleUrl: './button.scss',
    templateUrl: './button.html',
})
export class Button {
    public type: InputSignal<ButtonType> = input('primary' as ButtonType);
}
