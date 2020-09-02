@Component({
  selector: 'pre[wm-prism]',
  templateUrl: './highlighter.component.html',
  styleUrls: ['./highlighter.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'wm-prism',
    '[class.language-none]': '!disabled'
  }
})
/** Perform code hilighting by processing an input text to be rendered into an angular template
 * Using prism as tokenizer @see {https://github.com/PrismJS/prism} */
export class PrismHighlighter {

  /** Disables the highlighting */
  @Input('disabled') set disableHighlight(value: boolean) { this.disabled = coerceBooleanProperty(value); }
  public disabled = false;

  /** Selects the language */
  @Input() language: string;

  /** Parses the source text */
  @Input('wm-prism') source: string;
}