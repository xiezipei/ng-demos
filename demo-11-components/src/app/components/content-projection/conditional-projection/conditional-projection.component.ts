import {
  Component,
  ContentChild,
  Directive,
  HostBinding,
  HostListener,
  Input,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: 'button[appExampleZippyToggle]',
})
export class ZippyToggleDirective {
  @HostBinding('attr.aria-expanded') ariaExpanded = this.zippy.expanded;
  @HostBinding('attr.aria-controls') ariaControls = this.zippy.contentId;
  @HostListener('click') toggleZippy() {
    this.zippy.expanded = !this.zippy.expanded;
  }
  constructor(public zippy: ConditionalProjectionComponent) {}
}

@Directive({
  selector: '[appExampleZippyContent]',
})
export class ZippyContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

let nextId = 0;

@Component({
  selector: 'app-conditional-projection',
  templateUrl: './conditional-projection.component.html',
  styleUrls: ['./conditional-projection.component.scss'],
})
export class ConditionalProjectionComponent {
  contentId = `zippy-${nextId++}`;
  @Input() expanded = false;
  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
}
