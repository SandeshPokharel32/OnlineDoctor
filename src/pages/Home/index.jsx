import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  withStyles,
} from "@material-ui/core";
import BaseLayout from "layouts/BaseLayout";
import { useHistory } from "react-router";

const Styles = ({ palette }) => {
  return {
    banner: {
      padding: "20px 0",
      background: palette.primary.default,
      "min-height": "78vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    headingText: {
      color: "white",
    },
  };
};

const Home = ({ classes, children }) => {
  const router = useHistory();

  const handlePatient = (e) => {
    e.preventDefault();
    router.push("/login");
  };
  const handleDoctor = (e) => {
    e.preventDefault();
    router.push("/login_doctor");
  };
  return (
    <BaseLayout light>
      <Box className={classes.banner}>
        <Container>
          <Box textAlign="center" component="div">
            <Typography
              component="h1"
              variant="h1"
              classes={{ root: classes.headingText }}
            >
              Welcome to {process.env.REACT_APP_NAME}
            </Typography>
            <Box>
              <svg
                pointer-events="none"
                class="leaflet-zoom-animated"
                width="720"
                height="400"
                viewBox="-98 26 1140 650"
              >
                <g>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M806 497L803 492L799 489L799 482L797 480L798 476L791 471L792 464L785 463L783 465L782 464L778 466L771 463L770 465L767 466L770 472L769 474L776 481L773 483L772 486L768 486L766 488L770 494L768 498L768 503L766 505L769 508L771 508L773 512L771 516L774 518L772 530L775 530L778 533L782 530L783 531L790 528L794 529L793 526L799 519L797 510L807 501L807 499z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M821 502L816 496L806 497L807 501L797 510L799 519L793 526L795 534L809 534L817 538L820 535L826 536L830 534L834 536L840 536L838 533L834 533L834 524L831 521L827 523L825 522L825 518L820 506z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M852 549L854 554L853 555L860 559L863 559L865 556L871 558L877 555L878 557L878 552L880 552L881 545L885 549L888 546L891 550L895 543L897 549L901 547L902 544L905 545L904 535L900 531L900 521L895 518L894 514L890 514L887 509L888 508L885 506L874 508L861 517L858 516L852 522L851 525L854 527L852 533L846 536L842 536L847 539L848 543L851 545L849 548z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M905 545L902 544L901 547L899 547L898 549L895 543L891 550L888 546L885 549L881 545L880 552L878 552L878 557L877 555L871 558L865 556L863 559L860 559L853 555L854 554L852 549L851 552L848 553L848 566L846 568L847 578L850 587L854 588L857 591L858 589L860 590L861 585L863 583L869 587L870 584L875 582L877 586L876 588L882 592L885 592L886 596L889 596L888 594L896 587L895 584L897 583L897 572L899 571L901 564L903 562L905 553z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M767 466L763 467L758 465L756 468L750 471L743 471L743 481L741 483L742 486L736 490L729 491L726 495L722 496L716 501L719 506L722 506L731 500L745 507L750 516L752 524L751 528L753 533L756 534L772 530L773 528L774 518L771 516L773 512L771 508L769 508L766 505L768 503L768 498L770 494L766 488L768 486L772 486L773 483L776 481L769 474L770 472L768 469z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M840 536L834 536L830 534L826 536L820 535L817 538L815 537L812 546L814 551L808 560L810 565L808 568L808 572L804 577L805 579L803 583L806 595L811 595L814 598L819 589L824 589L828 587L836 589L837 591L841 592L841 594L851 590L847 578L846 568L848 566L848 553L851 552L852 549L849 548L851 545L848 543L847 539L842 536z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M742 476L731 477L730 474L723 467L720 467L717 460L715 460L712 456L707 455L697 464L697 466L694 469L692 478L695 481L695 484L691 488L693 490L698 487L701 490L705 491L706 494L708 494L716 501L722 496L726 495L729 491L736 490L742 486L741 483L743 481z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M885 506L889 484L891 479L893 478L890 474L891 468L894 467L893 465L890 468L886 479L880 484L868 484L862 486L853 483L851 486L859 492L858 495L855 496L854 500L841 507L835 515L836 516L832 521L834 524L834 533L838 533L840 536L846 536L852 533L854 527L851 525L852 522L858 516L861 517L874 508L880 506z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M849 420L850 417L846 417L843 420L841 419L840 414L837 413L835 416L830 416L826 419L821 417L824 416L823 414L816 418L812 418L806 415L803 416L802 419L794 418L790 416L786 407L783 406L781 403L776 402L774 409L776 415L775 418L778 419L775 422L775 427L778 430L773 443L772 449L774 453L771 456L773 460L771 463L778 466L782 464L783 465L785 463L792 464L791 471L798 476L797 480L799 482L799 489L803 492L806 497L816 496L821 502L823 497L826 497L828 495L829 488L833 483L825 469L830 452L829 450L834 445L838 434L840 436L843 436L849 427L848 426L850 423z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M775 403L770 401L769 398L765 397L761 393L759 395L750 391L752 388L749 384L744 383L738 388L731 383L730 388L727 391L724 399L725 404L727 404L729 408L729 414L727 419L730 420L731 426L727 433L726 440L724 440L722 444L716 444L708 452L707 455L712 456L715 460L717 460L720 467L723 467L730 474L731 477L740 477L742 476L743 471L750 471L756 468L758 465L763 467L770 465L773 460L771 456L774 453L772 449L773 443L778 430L775 427L775 422L778 419L775 418L775 407z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M815 537L809 534L795 534L788 549L784 550L782 548L778 554L779 559L776 561L775 564L776 571L774 574L770 575L767 581L770 581L770 577L779 576L782 569L785 569L787 585L795 591L804 590L804 577L808 572L808 568L810 565L808 560L814 551L812 546L815 540z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M893 465L893 463L890 461L890 458L895 447L898 444L898 440L901 438L903 428L905 428L905 424L907 422L904 419L907 417L907 415L900 411L896 413L894 410L892 411L888 408L884 411L878 407L871 408L870 403L867 403L867 406L862 409L856 421L849 420L849 427L843 436L840 436L838 434L834 445L829 450L830 452L825 469L833 483L848 486L851 486L853 483L862 486L868 484L880 484L886 479L890 468z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M851 486L833 483L829 488L828 495L826 497L823 497L820 506L825 518L825 522L827 523L831 521L836 516L835 515L841 507L854 500L855 496L858 495L859 492z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M716 501L711 497L709 501L707 501L705 505L702 506L708 506L706 510L710 515L708 523L699 525L699 527L693 530L693 532L686 527L686 529L696 535L698 533L708 534L710 530L714 530L721 533L721 535L724 536L725 539L729 539L729 541L726 544L729 544L731 546L729 549L731 550L731 553L735 556L744 556L745 554L749 554L751 557L756 554L760 554L760 556L765 554L769 547L770 550L774 551L776 555L782 548L784 550L788 549L793 540L795 534L793 528L783 531L782 530L778 533L775 530L770 530L759 534L753 533L751 528L752 524L750 516L745 507L741 504L731 500L722 506L719 506z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M580 535L578 521L582 514L582 506L586 502L590 491L588 489L580 489L569 474L563 476L561 476L561 474L558 475L556 482L558 487L555 499L556 502L553 510L550 513L552 515L546 521L557 524L558 529L561 529L561 532L566 532L563 536L567 537L572 534z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M686 527L693 532L693 530L697 529L696 526L684 518L678 516L670 517L666 513L662 504L660 503L660 506L662 507L663 511L660 514L661 515L659 518L658 534L660 535L660 541L656 550L657 555L659 557L659 561L653 565L654 571L660 566L663 566L664 561L666 560L677 560L685 566L685 563L690 559L691 557L685 545L686 541L683 529z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M659 503L657 501L655 503L653 502L651 498L649 499L646 503L647 506L642 515L637 531L634 535L634 538L639 541L640 544L639 559L644 564L647 564L649 567L653 567L653 565L659 561L659 557L657 555L656 550L660 541L660 535L658 534L660 524L659 518L661 515L660 514L663 511L662 507L660 506z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M557 475L552 474L549 471L548 472L547 470L536 465L522 467L521 464L513 462L512 467L510 469L512 469L510 471L511 472L507 472L505 474L521 479L527 492L527 499L525 505L526 507L522 513L534 518L536 517L538 519L540 517L545 518L546 521L551 517L552 515L550 513L556 502L555 499L558 487L556 482L557 480z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M596 550L599 548L597 546L598 544L596 543L597 539L599 539L598 536L604 532L603 518L608 510L607 508L612 504L615 497L611 499L603 493L602 494L592 490L586 502L582 506L583 509L581 517L578 521L578 526L580 528L580 535L582 535L580 542L584 548L594 549z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M722 573L728 575L731 580L747 588L750 588L752 584L759 587L766 584L765 582L767 581L770 575L774 574L776 571L775 564L776 561L779 559L778 554L776 555L774 551L770 550L769 547L765 554L760 556L760 554L756 554L751 557L749 554L745 554L744 556L735 556L731 553L731 550L729 549L731 546L729 544L726 544L726 550L723 552L724 567L722 570z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M722 573L724 567L723 552L726 550L726 544L729 541L729 539L725 539L724 536L721 535L721 533L714 530L710 530L708 534L698 533L696 535L688 531L686 527L683 529L686 541L686 549L688 549L691 557L685 563L685 566L690 566L690 568L694 568L696 565L706 565L706 567L718 571z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M649 499L640 495L630 502L616 502L614 500L612 504L607 508L608 510L603 518L604 532L598 536L599 539L597 539L596 543L598 544L597 546L599 548L596 550L601 548L605 544L610 545L617 541L619 538L622 538L623 536L624 537L628 534L630 537L634 538L642 515L647 506L646 503z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M676 409L669 408L663 404L667 398L658 390L658 383L655 382L653 374L649 372L645 375L631 378L629 381L626 377L624 378L618 376L614 380L614 384L612 384L609 387L615 393L613 400L614 407L609 419L612 424L618 422L622 426L620 427L632 431L637 439L642 436L646 438L649 437L649 440L652 443L653 442L656 444L662 437L662 432L665 428L672 429L673 427L671 425L671 420L669 418L674 413z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M656 444L653 442L652 443L649 440L649 437L646 438L642 436L637 439L632 431L620 427L611 443L610 441L606 443L608 445L606 447L604 445L603 450L604 452L608 453L609 461L605 464L606 469L617 476L630 476L631 478L637 477L636 474L638 469L644 470L646 465L650 464L647 458L652 448z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M599 437L594 434L591 440L592 446L586 453L588 454L586 457L590 464L601 467L604 470L606 469L605 464L609 461L608 453L604 452L603 450L604 445L606 447L608 445L606 443z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M618 430L612 432L608 430L601 434L599 437L606 443L610 441L611 443L617 433z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M620 427L622 426L618 422L612 424L609 419L592 420L588 424L590 428L586 428L584 431L582 431L581 436L586 440L585 442L587 448L589 449L592 446L591 440L594 434L599 437L601 434L608 430L618 430L619 427z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M609 387L605 389L604 392L597 398L592 399L591 401L581 400L581 394L575 392L579 387L574 386L567 389L565 392L560 394L561 397L564 397L560 411L560 415L563 417L562 420L566 420L574 426L588 424L592 420L609 419L614 407L613 400L615 393L613 390z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M647 373L642 367L638 349L635 350L635 354L633 354L631 358L632 360L627 365L625 359L616 356L610 355L606 357L602 363L598 361L598 359L588 361L587 358L583 355L580 357L578 356L582 365L581 370L583 372L582 376L574 384L574 386L579 387L575 392L581 394L581 400L591 401L592 399L597 398L604 392L605 389L614 384L614 380L618 376L624 378L626 377L629 381L631 378L645 375z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M578 356L570 354L566 357L564 359L564 365L562 365L557 370L558 373L556 381L554 381L551 384L547 382L543 384L542 389L540 391L541 396L539 396L533 402L532 405L532 409L534 411L533 412L536 415L537 419L535 419L532 422L525 419L520 419L522 423L525 424L525 429L527 431L534 429L539 432L539 437L542 434L548 437L551 434L555 435L562 433L565 435L569 432L572 432L577 437L581 436L582 431L584 431L586 428L590 428L588 424L574 426L562 420L563 417L560 415L560 411L564 400L564 397L561 397L560 394L565 392L567 389L573 387L583 372L581 370L582 365L580 359z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M691 488L685 489L679 486L677 483L675 484L669 478L667 478L664 471L663 473L661 469L656 468L650 464L646 465L644 470L638 469L636 474L637 477L621 477L613 473L606 480L607 483L613 486L614 488L615 495L613 497L615 497L614 500L616 502L629 502L639 495L646 497L648 499L650 498L652 500L651 501L654 503L656 501L659 502L670 517L678 516L684 518L697 528L701 524L707 523L709 521L710 516L706 510L708 506L705 507L702 505L704 505L707 501L708 502L711 497L710 495L706 494L705 491L697 487L694 490L691 489z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M728 420L722 420L718 417L714 420L715 423L713 428L715 429L710 434L707 434L702 444L691 448L685 454L684 458L681 461L680 458L669 458L669 453L664 447L657 444L650 450L649 456L647 458L650 464L656 468L661 469L663 473L664 471L667 478L669 478L675 484L677 483L679 486L685 489L691 488L695 484L692 477L693 472L698 463L708 454L708 452L716 444L722 444L724 440L726 440L727 433L731 427L731 422L728 420z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M728 420L727 419L729 415L729 409L728 405L725 404L725 402L719 404L720 405L717 408L713 408L710 404L707 404L705 401L703 403L700 399L695 400L691 386L693 385L693 383L690 380L689 375L688 379L683 382L682 386L678 386L678 394L682 406L676 409L669 418L671 420L671 425L673 427L672 429L665 428L662 432L662 437L660 438L657 444L664 447L669 453L669 458L680 458L681 461L684 458L685 454L691 448L702 444L707 434L710 434L715 429L713 428L715 423L714 420L718 417L722 420z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M581 436L577 437L572 432L569 432L565 435L562 433L555 435L551 434L548 437L542 434L539 437L538 435L536 439L532 439L530 441L532 448L526 452L528 461L524 467L532 465L538 466L540 468L544 468L545 470L554 475L571 475L571 479L574 481L577 487L581 489L587 489L589 491L592 490L602 494L603 493L606 496L607 495L611 499L613 499L615 492L614 488L613 486L607 483L606 480L609 478L612 472L609 472L609 470L604 470L601 467L590 464L586 457L588 454L586 453L589 449L587 448L585 442L586 440z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M525 418L524 415L521 414L519 411L516 411L515 414L513 414L513 417L509 417L509 419L501 418L499 422L504 427L500 427L498 429L499 432L497 434L494 436L491 433L484 438L476 440L464 452L445 452L444 455L449 456L446 459L445 464L452 464L454 466L458 465L460 460L463 459L463 456L469 456L469 460L475 462L475 465L478 463L480 464L483 471L504 476L507 472L511 472L510 471L512 469L510 469L512 467L513 462L521 464L522 467L524 467L528 461L526 452L532 448L530 441L532 439L536 439L539 432L534 429L527 431L525 429L525 424L522 423L520 419z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M356 319L350 321L349 319L342 319L340 322L340 325L343 327L341 330L336 327L335 332L331 333L335 338L331 338L332 341L335 343L335 347L337 347L339 353L342 353L345 356L351 358L355 363L354 365L359 366L361 364L364 364L370 370L372 370L374 374L382 372L390 381L396 381L397 383L399 381L404 382L407 387L412 382L417 369L410 365L409 360L405 358L402 359L392 356L389 353L385 353L384 351L378 353L375 351L376 346L374 342L377 340L374 336L368 334L358 336L358 332L355 330L356 325z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M513 414L515 414L516 411L520 411L526 420L532 422L535 419L537 419L532 410L533 402L536 401L540 396L540 392L544 382L551 384L554 381L556 381L558 374L557 369L564 365L564 359L569 354L571 354L574 348L572 341L574 337L578 336L579 331L581 331L580 323L582 320L581 318L578 318L573 312L569 314L567 313L559 322L559 324L546 325L545 327L528 318L529 314L525 313L520 306L514 306L513 304L506 306L505 308L507 311L509 311L508 314L510 317L514 337L517 341L521 342L528 352L525 355L522 362L522 372L511 384L508 386L504 386L502 396L499 398L499 403L504 404L507 407L510 407L511 412z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M482 341L481 338L473 337L473 335L470 334L467 330L462 331L459 327L451 325L449 322L446 323L439 321L432 324L434 330L423 345L426 348L420 348L423 354L428 359L427 363L433 365L431 369L432 370L437 373L441 373L444 376L444 378L453 381L453 383L460 387L464 383L470 385L477 385L476 375L473 373L476 367L473 361L476 353L475 349L479 343z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M514 337L506 340L500 334L498 335L496 341L482 341L479 343L475 349L476 353L473 361L476 367L473 373L476 375L478 387L488 382L495 381L500 384L504 390L504 386L508 386L519 376L522 372L522 362L525 355L528 352L521 342L517 341L516 338z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#fd8d3c"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M477 287L472 286L469 289L466 287L463 288L462 291L458 293L458 295L454 299L448 294L446 295L445 300L441 302L441 305L438 308L436 307L430 311L437 317L440 322L449 322L451 325L459 327L462 331L467 330L470 334L473 335L473 337L481 338L482 341L484 342L496 341L498 335L500 334L506 340L514 337L510 317L508 314L509 311L507 311L505 308L506 306L500 302L500 296L496 295L497 292L490 289L488 291L482 288z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#fd8d3c"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M477 287L476 284L479 277L478 274L480 269L476 267L473 268L474 258L472 258L470 250L474 247L474 244L465 243L466 240L462 237L460 238L457 236L455 238L451 236L452 235L449 233L442 233L437 235L436 237L432 236L430 240L431 242L427 244L421 243L418 247L415 248L415 252L418 258L415 259L415 261L412 260L411 262L413 264L410 276L409 275L398 289L399 291L396 293L397 299L404 302L405 305L401 312L405 317L406 324L416 327L425 312L430 311L436 307L438 308L441 305L441 302L445 300L446 295L448 294L454 299L458 295L458 293L462 291L463 288L466 287L469 289L472 286z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M430 311L425 312L416 327L406 324L405 317L401 312L405 305L404 302L399 299L386 303L383 306L374 308L369 305L367 307L364 305L360 305L361 311L358 315L355 330L358 332L358 336L368 334L374 336L377 340L374 342L376 346L375 351L378 353L384 351L385 353L389 353L392 356L402 359L405 358L409 360L409 358L406 355L406 351L408 349L412 350L415 354L419 348L426 348L423 345L434 330L432 324L439 321L435 315z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M420 348L415 354L412 350L408 349L406 351L406 355L409 358L410 365L417 369L412 382L405 389L405 392L412 396L419 393L421 386L423 384L421 382L423 379L426 379L426 373L429 373L432 370L431 369L433 365L427 363L428 359L423 354L422 351z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M432 370L429 373L426 373L426 379L423 379L421 382L423 384L421 386L419 393L412 396L410 395L410 397L407 400L401 401L396 399L392 405L411 405L413 409L415 409L417 406L425 409L427 408L432 412L436 413L439 410L444 413L446 412L446 410L450 409L450 397L456 394L449 392L446 388L453 383L453 381L444 378L444 376L441 373L437 373L435 371z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M504 390L500 384L495 381L488 382L478 387L477 385L470 385L464 383L460 387L453 383L446 388L449 392L452 391L456 394L450 397L450 409L446 410L446 412L452 413L453 415L463 413L466 416L475 415L484 417L486 419L485 422L489 428L492 427L492 424L495 424L498 426L498 428L500 428L501 426L503 427L503 425L499 423L500 419L509 419L509 417L513 417L510 407L507 407L504 404L499 403L499 398L502 396L502 392L504 390z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M441 465L445 464L446 459L449 457L449 455L444 456L444 452L464 452L476 440L484 438L490 433L494 436L497 434L499 432L498 426L492 424L492 427L489 428L485 422L486 419L484 417L475 415L466 416L463 413L461 413L458 415L456 414L452 427L444 430L436 429L436 432L429 430L423 432L418 431L420 438L432 438L430 445L435 449L435 452L436 451L440 455L440 460z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M350 383L347 385L345 383L343 388L340 390L342 394L339 397L344 399L346 402L346 406L338 405L335 408L333 407L331 409L325 408L323 412L324 413L322 413L323 414L317 418L321 422L322 421L337 423L344 422L346 420L351 426L354 423L357 426L371 427L371 417L376 418L380 412L376 408L378 406L375 406L377 401L375 401L372 398L369 391L364 386L361 389L358 388L358 386L352 386z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M208 358L202 355L199 361L197 362L198 364L185 373L182 379L184 386L182 388L197 397L203 398L215 409L224 414L228 414L233 405L243 406L244 403L252 401L255 403L257 402L257 394L254 391L252 391L249 388L238 385L238 381L234 375L229 372L226 368L221 367L219 363L214 363L213 360L212 361L209 358z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M182 388L184 386L182 379L185 373L198 364L197 362L199 361L202 355L208 358L211 352L201 345L199 346L188 336L186 336L183 332L175 328L171 322L162 318L162 314L159 314L159 317L155 324L137 341L134 347L137 350L151 352L153 361L162 373L163 376L161 376L164 380L168 379L168 375L173 375L180 382L180 387z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M279 376L273 369L270 369L269 367L266 366L254 366L252 368L247 365L243 368L242 367L238 372L238 384L249 388L257 394L256 403L250 401L249 403L243 403L243 405L249 413L253 413L259 416L269 425L276 428L279 433L285 436L313 431L311 427L312 426L316 424L321 425L323 423L317 418L321 416L323 414L322 413L324 413L319 408L319 404L317 404L319 402L318 400L311 395L314 391L303 387L299 383L297 383L296 380L292 380L291 378L288 380L279 376z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M392 405L396 399L401 401L407 400L410 397L410 395L405 392L405 389L407 387L404 382L399 381L397 383L396 381L390 381L382 372L374 374L372 370L370 370L364 364L361 364L359 366L354 365L353 368L347 367L348 378L350 378L350 383L352 386L355 385L355 387L358 386L358 388L361 389L364 386L369 391L372 398L375 401L377 401L375 406L382 406L382 403L386 402L387 405z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M367 426L357 426L354 423L351 426L346 420L344 422L337 423L323 422L322 425L316 424L312 426L311 427L314 435L313 438L315 439L315 443L318 447L316 452L316 458L337 458L339 462L348 464L365 463L368 468L369 456L366 451L369 445L369 434L367 427z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M392 405L387 405L386 402L382 403L382 406L378 406L376 408L380 412L376 418L371 417L370 419L372 425L375 427L377 425L380 425L384 429L386 427L388 429L395 431L402 430L407 433L413 434L418 438L420 438L418 431L423 432L429 430L436 432L436 429L444 430L452 427L456 414L453 415L452 413L444 413L439 410L436 413L432 412L427 408L425 409L417 406L415 409L413 409L411 405L401 406L400 404L397 406z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M339 353L336 354L332 363L328 365L328 367L324 371L325 372L321 375L318 375L315 371L311 371L310 374L307 373L300 380L301 385L304 388L313 391L311 394L319 401L317 403L320 406L319 408L323 412L325 408L331 409L333 407L335 408L338 405L346 406L346 402L344 399L339 397L342 394L340 390L343 388L345 383L347 385L350 383L351 381L350 378L348 378L347 367L353 368L355 363L351 358L345 356L342 353z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M339 353L337 347L335 347L335 343L332 341L331 338L326 338L316 334L316 332L312 334L310 332L307 336L295 332L293 328L289 329L289 331L286 333L282 332L279 340L276 342L277 344L274 346L275 349L278 351L277 354L275 355L277 361L282 366L279 376L287 380L290 380L291 378L295 381L296 380L297 383L301 385L300 380L307 373L310 374L311 371L315 371L318 375L321 375L325 372L324 371L328 367L328 365L332 363L336 354z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M413 434L407 433L402 430L395 431L388 429L386 427L384 429L380 425L377 425L375 427L372 425L371 427L367 426L369 434L369 445L366 451L369 456L368 468L374 472L374 476L377 478L383 477L386 471L388 470L386 465L388 463L386 460L411 462L408 455L409 449L407 449L406 444L412 438L413 435z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#f03b20"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M311 290L309 292L306 290L302 295L303 297L297 303L297 305L301 305L303 312L297 317L289 316L289 318L297 322L299 321L299 325L296 325L293 328L295 332L307 336L310 332L312 334L316 332L316 334L326 338L335 338L331 333L335 332L335 327L341 330L343 327L340 325L342 319L349 319L350 321L357 319L361 311L360 305L357 305L353 301L342 298L338 295L324 294L319 297L316 293L312 292z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M420 438L413 435L412 438L406 444L407 449L409 449L408 455L411 461L438 477L441 475L442 471L439 471L438 466L441 465L439 459L441 458L439 457L440 455L436 451L435 452L435 449L430 445L432 438L423 437z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M227 276L217 276L214 272L205 271L203 267L198 269L189 267L190 257L179 264L173 271L176 281L180 286L183 287L191 303L187 305L189 308L197 314L202 314L212 319L212 317L216 313L218 306L223 305L223 303L227 301L224 297L223 292L225 286L228 283z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#fd8d3c"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M299 275L308 278L310 284L312 285L312 292L316 293L319 297L324 294L338 295L342 298L353 301L357 305L364 305L367 307L369 305L374 308L383 306L386 303L397 300L396 293L399 291L398 289L409 275L410 276L413 264L411 262L412 260L415 261L415 259L418 258L415 252L413 254L410 251L408 252L406 248L402 248L400 242L394 239L392 235L392 230L389 229L389 221L385 221L381 216L382 212L378 210L375 212L372 206L372 204L375 204L369 202L367 200L368 198L363 200L361 199L362 197L352 198L345 190L338 190L339 188L337 186L329 189L326 188L326 193L322 194L325 204L321 209L315 211L314 214L316 215L313 220L306 226L303 221L299 221L296 223L295 226L300 233L300 236L293 243L299 250L296 253L284 254L281 257L280 269L278 271L284 275L286 275L289 272L294 272z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#fd8d3c"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M290 156L288 152L282 150L277 146L275 148L272 143L269 145L267 142L262 140L254 140L256 135L255 134L258 130L256 129L256 126L250 123L250 121L247 119L249 117L248 115L250 111L248 106L245 104L242 107L237 106L236 109L223 104L222 102L212 101L195 93L195 96L193 98L189 95L188 102L185 103L172 96L171 100L174 101L173 103L171 103L171 109L174 111L171 112L173 114L170 118L171 123L164 130L156 130L159 135L159 140L157 144L177 149L179 152L177 155L177 162L182 162L184 159L194 156L202 156L205 161L214 161L214 168L212 169L212 173L208 175L203 189L204 194L208 198L212 198L213 196L220 197L224 191L230 190L235 187L237 183L240 181L243 181L242 183L247 189L247 194L261 191L261 187L264 186L267 188L273 185L278 187L281 183L279 179L281 178L280 173L284 171L283 167L286 166L284 163L287 161L287 159z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M281 262L274 259L271 260L266 258L256 266L255 265L252 268L252 270L244 277L241 276L240 272L237 270L231 275L227 276L228 283L225 286L223 292L224 297L227 301L223 303L223 305L218 306L217 308L224 318L241 318L245 321L256 321L257 314L261 312L263 309L265 311L268 300L273 300L278 294L286 289L290 289L292 280L295 276L298 275L294 272L289 272L286 275L284 275L278 271L280 269z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M296 223L292 221L290 217L290 212L283 219L278 211L275 213L270 211L268 219L260 220L259 223L256 223L251 219L250 215L247 217L245 214L240 214L238 216L234 215L232 218L229 219L228 233L226 234L223 240L220 241L220 243L222 246L225 247L226 254L228 254L238 262L237 270L240 272L241 276L244 277L249 274L255 265L256 266L266 258L271 260L274 259L281 262L281 257L284 254L296 253L299 250L293 243L300 236L300 233L295 226z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M229 219L224 219L222 216L215 217L213 225L211 225L208 232L198 234L195 228L188 229L184 235L178 240L182 244L180 249L182 255L185 255L186 257L189 258L190 257L189 267L194 269L203 267L205 271L214 272L217 276L220 277L231 275L237 270L238 262L228 254L226 254L225 247L222 246L220 243L220 241L223 240L226 234L228 233L228 226z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#fd8d3c"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M326 188L325 184L319 183L317 178L311 179L311 175L313 175L316 172L311 167L305 170L303 169L305 166L294 153L284 163L286 166L283 167L284 171L280 173L281 178L279 179L281 183L278 187L273 185L267 188L264 186L261 187L261 191L247 194L247 189L242 183L243 181L240 181L237 183L235 187L230 190L224 191L220 197L213 196L212 198L214 204L212 210L215 217L222 216L224 219L229 219L232 218L234 215L238 216L240 214L245 214L247 217L250 215L251 219L256 223L259 223L260 220L268 219L270 211L275 213L278 211L283 219L290 212L290 217L292 221L296 223L299 221L303 221L306 226L313 220L316 215L314 214L315 211L321 209L325 204L322 194L326 193z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M282 366L277 361L275 355L277 354L278 351L275 349L274 346L277 344L276 342L279 340L281 336L281 332L278 332L277 327L273 324L266 324L256 320L254 322L251 321L252 320L246 321L242 318L240 318L238 320L239 321L237 321L235 327L238 329L239 335L234 341L235 342L232 341L232 345L235 348L233 351L234 352L228 355L224 352L211 349L208 358L212 361L213 360L214 363L218 363L222 367L227 369L237 378L238 372L242 367L243 368L247 365L252 368L254 366L269 367L270 369L273 369L279 376L280 370L282 368z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M187 305L184 305L186 303L184 301L184 298L181 293L178 292L178 287L174 285L168 287L161 283L159 283L156 286L150 285L141 278L133 276L126 281L139 293L143 289L145 293L150 296L149 291L154 297L152 299L156 304L155 307L157 307L159 314L162 314L162 318L171 322L175 328L183 332L186 336L188 336L199 346L201 345L210 351L212 349L216 349L230 355L234 351L233 349L235 348L232 345L232 341L235 342L234 341L239 335L236 327L236 321L238 321L239 318L224 318L217 308L216 313L212 317L212 319L202 314L197 314L189 308z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M266 324L273 324L277 327L277 332L286 333L289 331L289 329L293 328L296 325L299 325L299 321L297 322L289 318L289 316L297 317L303 312L301 305L297 305L297 303L303 297L302 295L306 290L309 292L311 290L312 285L310 284L308 278L299 275L295 276L292 280L290 289L286 289L278 294L275 299L268 300L265 311L263 309L261 312L257 314L256 320L262 322z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M178 240L176 238L173 239L170 236L166 238L161 233L160 235L157 236L155 230L144 226L142 236L138 243L140 245L139 247L131 250L143 269L143 274L139 278L141 278L150 285L156 286L159 283L161 283L166 287L171 285L178 287L178 292L181 293L186 303L184 305L187 305L191 303L183 287L180 286L176 281L173 274L173 271L179 264L189 258L186 257L185 255L182 255L180 249L182 244L181 242z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M106 188L101 186L94 186L93 188L82 188L73 196L68 196L64 198L61 203L57 205L58 207L51 215L52 217L46 218L46 223L49 225L49 228L52 233L54 235L59 230L63 229L66 225L77 225L79 224L79 222L90 226L93 224L93 221L103 224L102 226L105 228L108 228L110 226L112 227L112 223L114 223L118 219L115 219L114 216L108 210L105 211L104 209L100 208L100 205L103 205L105 194L102 193z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M138 142L132 147L129 152L130 154L128 159L131 161L132 169L135 171L134 179L126 182L125 184L121 182L110 188L106 188L102 193L105 194L103 205L100 205L100 208L104 209L105 211L108 210L114 216L115 219L118 219L120 221L121 224L129 222L143 225L145 225L146 223L150 225L155 222L161 217L159 215L164 211L168 205L171 204L173 195L184 189L185 185L183 181L186 181L188 178L187 174L189 168L186 164L182 162L177 162L177 155L179 152L177 149L157 144L153 145L154 148L141 147z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M178 240L188 229L195 228L198 234L200 234L208 232L211 225L213 225L215 217L212 210L214 204L213 200L212 198L208 198L204 194L203 189L208 175L212 173L212 169L214 168L213 160L205 161L202 156L194 156L184 159L182 162L186 164L189 168L187 174L188 178L186 181L183 180L185 185L184 189L173 195L171 204L168 205L164 211L159 215L161 217L155 222L150 225L148 224L146 226L155 230L157 236L160 235L161 233L166 238L170 236L173 239L176 238z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M105 228L102 226L103 224L93 221L93 224L90 226L79 222L79 224L77 225L66 225L63 229L59 230L52 238L52 248L51 249L46 246L47 253L49 256L45 259L40 257L40 263L44 268L49 268L52 266L64 270L69 269L71 271L71 274L74 274L77 272L80 265L77 262L77 260L81 259L81 256L87 251L88 252L96 250L96 245L101 240L99 236L103 236L104 234L102 231z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M85 90L95 97L97 97L107 107L106 108L117 111L120 114L120 116L127 115L131 119L133 127L137 131L137 137L140 138L139 141L131 149L130 156L128 158L131 161L132 168L136 172L134 178L135 179L128 182L127 181L124 184L122 182L119 183L107 189L104 186L94 186L91 189L82 188L79 191L77 191L74 194L74 196L68 196L64 198L65 193L61 189L59 181L62 180L61 179L63 179L63 177L67 173L73 175L73 173L78 168L80 168L79 167L81 165L82 158L86 154L92 155L98 149L100 149L102 145L101 144L105 142L105 140L115 132L110 123L104 117L102 111L100 111L96 107L94 108L91 105L85 93L83 93L79 97L77 96L78 93L85 90z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M148 224L146 223L145 225L143 225L129 222L121 224L118 219L114 223L112 223L112 227L110 226L102 231L104 234L103 236L99 236L100 240L99 243L96 245L96 250L88 252L87 251L81 256L81 259L77 260L77 262L84 268L86 266L89 270L99 272L106 276L107 281L109 282L112 277L115 278L115 280L118 282L126 281L133 276L139 278L143 274L143 269L131 250L139 247L140 245L138 243L144 226L146 226z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M126 281L118 282L115 280L115 278L112 277L109 282L107 281L106 276L102 275L99 272L89 270L86 266L84 268L80 265L77 272L72 274L73 275L70 281L72 281L74 286L73 292L79 301L78 306L80 308L78 309L80 312L83 313L82 315L86 318L92 318L93 322L95 323L94 325L97 327L103 327L103 329L105 330L104 332L108 333L113 337L114 334L118 336L117 337L119 341L126 341L124 342L125 343L130 341L130 346L135 348L134 347L137 341L155 324L159 317L159 314L157 307L155 307L156 304L152 299L154 297L153 295L149 291L150 296L145 293L143 289L139 293L130 284z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#555"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bd0026"
                    fill-opacity="0.7"
                    fill-rule="evenodd"
                    d="M72 274L69 269L65 270L52 266L49 268L44 268L40 263L40 257L35 261L32 276L30 275L26 284L28 295L32 295L38 301L43 304L47 304L47 307L54 311L55 315L60 319L64 318L69 320L71 325L76 329L74 315L80 312L78 309L80 308L78 306L79 301L73 292L74 286L72 281L70 281L73 275z"
                    stroke-dasharray="0"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#003893"
                    stroke-opacity="1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="none"
                    fill-opacity="0"
                    fill-rule="evenodd"
                    d="M767 581L770 575L772 575L776 571L775 564L779 558L778 554L775 554L774 551L769 549L769 547L767 549L768 550L761 556L758 553L751 556L746 554L743 557L741 555L733 556L731 550L729 550L731 545L726 544L729 541L729 539L725 539L720 532L710 530L708 534L699 533L695 535L686 529L686 527L693 532L693 530L695 531L695 529L696 530L699 527L699 525L707 523L709 521L710 516L706 510L708 507L703 506L707 501L709 501L711 497L710 495L706 494L705 491L697 487L694 490L691 488L695 484L692 477L693 472L698 463L708 454L708 452L716 444L722 444L727 438L729 429L731 427L731 422L727 419L729 415L729 409L728 405L725 404L724 399L726 395L725 394L730 388L730 384L733 383L736 388L740 387L744 383L749 384L752 388L750 392L753 392L753 394L758 395L762 393L765 397L769 398L770 401L782 404L789 412L789 416L795 419L802 419L805 415L810 416L811 418L815 418L823 414L824 415L821 417L826 419L829 416L835 416L838 413L841 415L841 419L844 420L847 417L849 417L850 420L856 421L862 412L861 411L867 405L867 403L869 403L870 406L873 408L878 407L884 411L889 408L894 410L896 413L898 413L899 411L904 413L907 416L904 419L907 423L902 430L901 438L894 448L892 457L890 459L894 466L890 471L893 478L890 481L887 492L887 500L884 504L884 506L888 508L888 512L891 515L894 514L895 518L900 520L900 531L904 535L906 545L903 563L899 569L900 570L898 570L898 574L895 579L897 581L896 587L888 594L889 595L886 596L885 592L882 592L877 588L877 586L874 586L876 584L873 581L869 587L867 587L867 585L863 583L861 585L860 590L858 589L857 591L852 587L851 590L841 594L841 592L837 591L836 589L825 587L824 589L819 589L818 591L817 590L815 595L816 596L814 598L811 595L807 595L805 590L796 591L790 588L787 585L785 570L782 569L778 576L771 577L769 580L770 581z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#003893"
                    stroke-opacity="1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="none"
                    fill-opacity="0"
                    fill-rule="evenodd"
                    d="M514 462L516 464L520 464L523 467L532 465L538 466L558 476L560 474L562 476L566 474L571 475L571 479L580 489L583 488L588 489L590 491L596 491L609 496L610 499L615 497L614 500L616 502L630 502L636 496L639 495L648 499L650 498L652 502L654 503L656 501L661 504L666 513L670 517L678 516L684 518L697 528L697 530L693 530L693 532L686 527L686 529L689 532L694 533L696 535L698 533L709 534L709 532L712 530L720 533L721 532L721 534L729 540L726 544L731 545L729 549L734 556L740 555L743 557L746 554L751 556L758 553L761 556L765 554L769 547L771 551L773 551L776 555L779 555L779 558L775 564L776 570L772 575L770 575L768 580L765 581L766 584L760 587L752 584L749 589L731 580L727 574L720 573L705 565L696 565L692 569L689 565L684 567L684 565L672 559L670 561L666 560L662 566L661 565L654 571L653 566L649 567L647 564L640 561L640 542L637 539L631 537L629 534L615 541L615 543L610 545L606 544L602 548L597 550L584 548L582 547L582 544L580 544L582 535L572 534L570 536L565 537L564 534L567 533L561 532L557 524L546 521L545 518L542 516L538 519L536 517L530 517L522 513L526 506L525 505L527 499L527 491L520 478L505 475L507 472L511 472L510 471L512 469L510 469L512 467L513 462z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#003893"
                    stroke-opacity="1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="none"
                    fill-opacity="0"
                    fill-rule="evenodd"
                    d="M725 402L725 404L727 404L729 408L729 414L727 419L730 420L731 422L727 438L723 442L723 444L717 444L708 452L708 454L697 464L692 476L692 478L695 481L695 484L691 488L693 490L698 487L701 490L705 491L706 494L708 494L711 497L709 501L707 501L705 505L702 506L707 507L708 514L710 515L709 520L707 523L699 525L697 529L696 526L684 518L678 516L670 517L666 513L662 504L657 501L655 503L653 502L651 498L649 499L639 495L636 496L630 502L616 502L614 500L615 497L611 499L603 493L602 494L592 490L589 491L587 489L581 489L576 485L569 474L563 476L561 476L561 474L558 476L536 465L523 467L520 464L516 464L514 462L512 468L510 468L512 470L510 470L511 472L507 472L503 476L501 474L489 473L485 471L484 472L480 465L481 464L478 463L476 465L474 461L473 462L468 459L469 456L466 457L464 455L458 464L454 466L452 464L447 465L446 460L449 457L449 455L444 456L444 452L464 452L476 440L481 439L490 433L494 436L499 433L498 429L501 426L503 427L503 425L499 423L500 419L509 419L509 417L513 417L513 415L516 412L519 411L525 419L531 422L534 421L535 419L536 420L536 416L532 410L533 402L536 401L540 396L540 392L544 382L551 384L553 381L556 381L558 374L557 369L564 365L564 359L569 354L580 357L582 355L587 358L588 361L594 361L598 359L598 361L602 363L606 358L605 357L607 356L617 356L622 359L626 359L625 360L627 365L632 360L633 354L635 354L635 350L638 349L640 355L639 356L641 358L640 361L642 368L647 373L648 372L653 374L655 381L658 384L658 390L667 398L663 404L669 408L670 407L676 409L683 405L678 395L678 386L682 386L689 376L693 383L691 387L693 391L693 397L695 400L700 399L701 402L703 403L705 401L706 404L710 404L715 408L717 408L720 405L720 403L724 402z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#003893"
                    stroke-opacity="1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="none"
                    fill-opacity="0"
                    fill-rule="evenodd"
                    d="M572 354L568 355L564 359L564 365L562 365L557 370L558 373L556 381L554 381L551 384L545 382L540 391L541 396L539 396L533 402L532 409L536 415L536 420L535 419L532 422L529 421L519 411L516 411L515 414L513 414L513 417L509 417L509 419L501 418L499 422L504 427L500 427L498 429L499 432L497 434L494 436L491 433L481 439L476 440L464 452L445 452L444 455L449 455L449 457L446 459L446 463L441 465L439 459L441 457L439 457L439 453L436 451L435 452L435 447L430 445L432 439L426 437L421 438L418 431L424 432L429 430L435 432L437 429L444 430L450 427L451 428L456 414L453 415L449 412L444 413L439 410L437 412L436 411L436 413L429 411L428 408L425 409L419 406L417 406L414 409L411 406L406 405L407 404L403 406L401 406L400 404L398 406L393 405L392 404L397 399L401 401L407 400L407 398L410 397L410 395L405 392L407 387L404 384L404 382L399 381L397 383L394 380L391 381L382 372L380 374L378 372L374 374L365 364L360 364L359 366L355 365L351 358L347 357L343 353L339 353L339 349L335 347L335 343L332 341L331 338L335 338L331 334L335 332L336 327L341 330L343 328L339 324L339 322L342 319L357 319L357 315L360 313L361 310L360 305L364 305L367 307L369 305L374 308L378 306L384 306L387 303L396 301L396 293L399 292L398 289L408 278L408 276L411 275L411 267L413 265L411 262L418 257L415 248L420 246L421 243L430 243L432 236L435 237L442 233L450 233L452 237L462 237L466 240L465 243L467 244L474 244L473 248L470 250L471 256L472 258L474 258L473 267L477 267L480 271L476 284L478 287L481 286L485 290L488 291L490 289L496 292L496 294L500 296L499 297L501 303L505 306L512 304L514 306L521 307L523 311L525 311L525 313L528 314L528 318L545 327L546 325L549 324L557 325L560 323L559 322L567 313L575 313L575 315L578 318L580 317L582 320L580 323L581 330L578 333L578 335L574 337L572 340L574 348L573 354z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#003893"
                    stroke-opacity="1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="none"
                    fill-opacity="0"
                    fill-rule="evenodd"
                    d="M309 292L311 290L315 292L319 297L321 295L322 296L335 294L343 298L352 301L353 300L356 303L356 305L360 305L361 310L360 313L357 314L358 317L353 320L343 319L339 323L343 327L342 330L335 327L335 331L332 334L331 333L333 337L335 337L331 339L335 343L335 347L337 347L339 351L347 357L352 358L356 366L360 364L367 365L368 368L372 370L372 372L381 374L383 372L385 374L384 375L386 377L387 376L387 378L390 381L396 381L398 383L400 381L407 386L405 392L408 393L410 397L407 400L402 401L396 399L395 402L392 404L393 405L398 406L400 404L402 406L402 404L404 406L406 404L410 406L411 405L413 409L420 406L425 409L428 408L431 412L435 413L440 410L443 411L443 413L450 412L453 415L456 414L456 418L454 420L452 428L449 427L444 430L437 429L436 432L432 432L430 430L424 432L419 431L421 439L423 437L432 438L430 446L435 447L434 450L436 452L437 451L440 454L439 457L442 458L439 459L441 463L439 471L443 472L438 477L435 474L422 468L415 463L407 461L388 460L388 464L386 466L389 469L386 472L386 474L379 479L374 476L374 473L366 466L365 463L346 464L340 462L337 458L317 458L316 451L318 447L316 445L315 438L313 438L314 435L312 431L308 431L297 435L282 435L274 427L272 427L258 415L253 413L250 414L243 406L233 405L228 414L225 415L220 410L216 408L215 409L204 398L195 397L195 395L183 389L180 386L180 382L173 375L169 375L169 379L162 380L163 377L161 377L163 373L154 363L151 352L137 350L134 347L135 344L157 321L159 315L162 314L163 319L168 320L172 324L174 324L174 326L177 329L186 334L186 336L188 336L200 346L201 345L206 350L211 351L208 358L209 359L211 359L215 363L219 363L222 366L222 368L226 368L238 378L237 377L239 371L247 365L252 368L254 366L260 366L262 368L268 366L271 369L273 369L276 374L279 375L280 370L283 369L282 368L284 366L282 366L278 362L275 355L278 352L274 346L280 339L281 332L286 333L290 330L289 329L293 329L297 325L299 325L299 321L298 322L295 321L296 320L292 320L289 317L290 315L294 317L301 315L303 309L301 305L298 306L297 303L303 297L304 292L306 290L309 292z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#003893"
                    stroke-opacity="1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="none"
                    fill-opacity="0"
                    fill-rule="evenodd"
                    d="M196 93L207 98L209 101L214 100L216 102L222 102L228 106L230 106L230 104L235 109L238 108L238 106L242 108L243 105L246 104L250 110L248 114L249 117L247 119L254 126L255 125L258 130L258 132L255 133L255 141L267 141L269 145L271 143L276 148L278 146L283 151L288 152L290 156L293 153L295 153L301 161L301 163L306 166L303 169L304 170L309 169L311 167L315 169L316 172L313 175L311 175L311 179L318 178L319 183L325 184L325 188L330 189L333 186L338 186L339 191L346 190L346 192L348 192L353 199L358 196L360 196L362 200L368 198L370 202L375 203L373 205L372 204L374 210L373 211L382 212L381 215L384 218L384 220L390 222L389 229L393 231L392 234L394 239L398 239L398 241L401 244L400 245L404 249L405 248L407 252L410 251L413 254L417 252L416 253L418 255L418 257L411 262L413 264L413 266L411 266L411 276L409 275L408 278L402 284L402 286L399 289L399 293L396 294L397 299L394 302L387 303L383 307L378 306L374 308L369 305L367 307L365 305L357 305L352 300L342 298L336 294L325 294L320 297L317 295L316 292L312 292L312 290L308 292L306 290L304 292L303 297L297 303L297 305L301 305L303 309L301 315L299 315L296 318L291 315L289 316L291 320L295 320L297 322L298 321L299 324L290 329L286 333L281 332L280 339L277 342L277 344L274 345L278 351L276 355L277 360L279 364L283 366L279 376L279 374L277 374L267 366L263 368L260 366L254 366L252 368L247 365L239 371L237 377L238 378L226 368L222 368L222 366L219 363L215 363L211 359L209 359L208 358L211 351L206 350L201 345L200 346L195 341L186 336L186 334L177 329L174 326L174 324L172 324L168 320L163 319L163 315L157 311L158 308L156 306L155 301L153 299L153 295L150 292L150 290L150 296L148 296L144 294L145 293L143 289L142 292L139 293L135 289L133 289L133 287L128 282L126 282L133 276L141 278L147 284L150 285L155 284L157 286L160 283L162 283L166 287L168 287L173 284L178 287L178 292L180 292L185 298L184 301L186 303L184 305L191 304L191 302L188 299L186 291L172 274L180 263L189 258L181 253L180 248L182 242L179 241L179 239L188 231L188 229L189 230L191 228L197 228L197 232L199 234L203 234L205 232L209 232L209 228L214 224L215 215L214 212L211 211L214 208L214 202L211 198L207 198L204 195L203 190L207 182L208 175L210 175L213 171L214 162L212 160L205 161L205 159L202 156L195 156L193 158L185 158L182 163L178 163L178 149L173 148L171 146L167 148L159 145L157 143L159 141L159 135L156 132L156 130L164 130L171 123L170 118L173 115L171 113L173 111L171 109L171 103L174 102L171 99L172 96L174 96L180 101L188 103L188 97L191 96L193 98L196 93z"
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#003893"
                    stroke-opacity="1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="0"
                    fill="none"
                    fill-opacity="0"
                    fill-rule="evenodd"
                    d="M85 90L95 97L97 97L107 107L106 108L117 111L120 114L120 116L127 115L131 119L133 127L137 131L137 137L140 138L138 142L141 145L141 147L148 148L150 146L154 148L154 146L158 144L166 148L176 148L179 153L177 155L177 161L179 163L183 163L183 159L191 157L192 158L194 156L203 156L205 160L214 161L214 169L212 169L213 172L210 175L208 175L207 182L203 190L204 195L207 198L211 198L214 201L214 207L212 211L210 211L212 211L215 214L214 223L209 227L208 232L202 234L198 234L197 228L191 228L187 230L188 231L179 240L182 243L180 248L181 253L188 258L176 267L176 269L173 272L174 278L180 284L180 286L183 287L191 303L187 305L184 304L186 304L184 300L185 299L178 291L178 287L173 284L166 287L162 283L160 283L157 286L155 284L150 285L147 284L141 278L133 276L130 279L128 279L126 281L129 282L134 289L136 289L139 292L141 292L144 289L144 295L147 294L149 296L150 291L153 294L154 297L152 299L155 302L156 307L158 308L157 311L159 313L157 321L146 332L146 334L140 340L138 340L138 342L134 346L135 347L131 347L130 346L132 344L130 344L129 341L126 343L124 343L125 341L121 341L121 339L119 339L119 341L117 338L118 335L115 334L113 335L113 337L110 334L106 333L103 328L100 326L97 327L94 324L95 323L92 320L92 318L86 318L82 312L78 312L74 315L77 327L76 328L70 324L69 319L59 319L59 317L54 313L55 312L52 309L48 307L47 304L43 304L40 301L38 301L33 295L27 295L26 290L27 281L34 273L34 263L40 257L44 259L49 255L46 246L48 248L52 248L51 245L54 234L51 233L49 229L50 226L46 222L46 218L52 218L51 215L58 208L57 205L59 205L64 200L65 193L61 189L59 181L62 180L61 179L63 179L63 177L67 173L73 175L73 173L78 168L80 168L79 167L81 165L82 158L86 154L92 155L98 149L100 149L102 145L101 144L105 142L105 140L115 132L110 123L104 117L102 111L100 111L96 107L94 108L91 105L85 93L83 93L79 97L77 96L78 93L85 90z"
                  ></path>
                </g>
              </svg>
            </Box>

            <Typography
              component="p"
              variant="h4"
              classes={{ root: classes.headingText }}
            >
              Please choose what you want to join in as :
            </Typography>
            <Box marginTop="80px">
              <Box
                component="div"
                marginTop={3}
                gridTemplateColumns="1fr 1fr"
                display="grid"
                gridGap="10px"
                color="white"
              >
                <Button
                  variant="contained"
                  color="default"
                  size="large"
                  onClick={handlePatient}
                >
                  Citizen
                </Button>
                <Button
                  variant="contained"
                  color="default"
                  size="large"
                  onClick={handleDoctor}
                >
                  Vaccine camps
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </BaseLayout>
  );
};

export default withStyles(Styles)(Home);
