import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OthalaLib } from 'othala-lib';

@Component({
    imports: [RouterOutlet, OthalaLib],
    selector: 'app-root',
    styleUrl: './app.scss',
    templateUrl: './app.html',
})
export class App {
    protected readonly title = signal('watchlist');
}
