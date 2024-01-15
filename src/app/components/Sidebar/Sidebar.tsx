import styles from './Sidebar.module.css';
import {SidebarProps} from "./Sidebar.props";
import React from "react";
import {Menu} from "@/app/components/Sidebar/Menu/Menu";

export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            <div className={styles.logoContainer}>
                <svg
                    className={styles.text}
                    width={86}
                    height={54}
                    fill={'#FF7C32'}
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.02 21H1.8V6.72H10.02V9.2H4.82V12.34H9.66V14.82H4.82V18.5H10.02V21ZM18.9514 9.88C20.1247 9.88 21.0647 10.2 21.7714 10.84C22.4781 11.4667 22.8314 12.48 22.8314 13.88V21H19.8514V14.62C19.8514 13.8333 19.7114 13.2467 19.4314 12.86C19.1514 12.46 18.7047 12.26 18.0914 12.26C17.1847 12.26 16.5647 12.5733 16.2314 13.2C15.8981 13.8133 15.7314 14.7 15.7314 15.86V21H12.7514V10.08H15.0314L15.4314 11.48H15.5914C15.8314 11.1067 16.1247 10.8067 16.4714 10.58C16.8181 10.34 17.2047 10.1667 17.6314 10.06C18.0581 9.94 18.4981 9.88 18.9514 9.88ZM30.3959 9.88C31.4093 9.88 32.2759 10.0733 32.9959 10.46C33.7293 10.8467 34.2959 11.4067 34.6959 12.14C35.0959 12.8733 35.2959 13.7733 35.2959 14.84V16.28H28.2559C28.2826 17.12 28.5293 17.78 28.9959 18.26C29.4759 18.74 30.1359 18.98 30.9759 18.98C31.6826 18.98 32.3226 18.9133 32.8959 18.78C33.4693 18.6333 34.0626 18.4133 34.6759 18.12V20.42C34.1426 20.6867 33.5759 20.88 32.9759 21C32.3893 21.1333 31.6759 21.2 30.8359 21.2C29.7426 21.2 28.7759 21 27.9359 20.6C27.0959 20.1867 26.4359 19.5667 25.9559 18.74C25.4759 17.9133 25.2359 16.8733 25.2359 15.62C25.2359 14.34 25.4493 13.28 25.8759 12.44C26.3159 11.5867 26.9226 10.9467 27.6959 10.52C28.4693 10.0933 29.3693 9.88 30.3959 9.88ZM30.4159 12C29.8426 12 29.3626 12.1867 28.9759 12.56C28.6026 12.9333 28.3826 13.5133 28.3159 14.3H32.4959C32.4959 13.86 32.4159 13.4667 32.2559 13.12C32.1093 12.7733 31.8826 12.5 31.5759 12.3C31.2693 12.1 30.8826 12 30.4159 12ZM43.8123 9.88C43.959 9.88 44.1323 9.88667 44.3323 9.9C44.5323 9.91333 44.6923 9.93333 44.8123 9.96L44.5923 12.76C44.499 12.7333 44.359 12.7133 44.1723 12.7C43.999 12.6733 43.8457 12.66 43.7123 12.66C43.3257 12.66 42.9523 12.7133 42.5923 12.82C42.2323 12.9133 41.9057 13.0667 41.6123 13.28C41.3323 13.4933 41.1057 13.78 40.9323 14.14C40.7723 14.4867 40.6923 14.92 40.6923 15.44V21H37.7123V10.08H39.9723L40.4123 11.92H40.5523C40.7657 11.5467 41.0323 11.2067 41.3523 10.9C41.6723 10.5933 42.039 10.3467 42.4523 10.16C42.879 9.97333 43.3323 9.88 43.8123 9.88ZM50.1391 9.88C50.8057 9.88 51.4057 10.0133 51.9391 10.28C52.4724 10.5467 52.9257 10.9467 53.2991 11.48H53.3791L53.6191 10.08H56.1391V21.02C56.1391 22.06 55.9324 22.9333 55.5191 23.64C55.1191 24.3467 54.5124 24.88 53.6991 25.24C52.8857 25.6133 51.8791 25.8 50.6791 25.8C49.9057 25.8 49.1857 25.7533 48.5191 25.66C47.8657 25.5667 47.2257 25.4 46.5991 25.16V22.78C47.0524 22.9667 47.5057 23.12 47.9591 23.24C48.4257 23.3733 48.8991 23.4667 49.3791 23.52C49.8724 23.5867 50.3657 23.62 50.8591 23.62C51.6324 23.62 52.2057 23.4133 52.5791 23C52.9657 22.5867 53.1591 21.9667 53.1591 21.14V20.92C53.1591 20.6933 53.1657 20.46 53.1791 20.22C53.2057 19.98 53.2257 19.7667 53.2391 19.58H53.1591C52.7857 20.1533 52.3391 20.5667 51.8191 20.82C51.2991 21.0733 50.7124 21.2 50.0591 21.2C48.7657 21.2 47.7524 20.7067 47.0191 19.72C46.2991 18.72 45.9391 17.3333 45.9391 15.56C45.9391 14.36 46.1057 13.34 46.4391 12.5C46.7724 11.6467 47.2524 11 47.8791 10.56C48.5191 10.1067 49.2724 9.88 50.1391 9.88ZM51.0791 12.3C50.6124 12.3 50.2191 12.4267 49.8991 12.68C49.5924 12.92 49.3591 13.2867 49.1991 13.78C49.0524 14.26 48.9791 14.8667 48.9791 15.6C48.9791 16.6933 49.1524 17.5133 49.4991 18.06C49.8457 18.5933 50.3857 18.86 51.1191 18.86C51.5057 18.86 51.8391 18.8133 52.1191 18.72C52.3991 18.6133 52.6257 18.4467 52.7991 18.22C52.9857 17.98 53.1257 17.6733 53.2191 17.3C53.3124 16.9267 53.3591 16.4733 53.3591 15.94V15.58C53.3591 14.7933 53.2791 14.16 53.1191 13.68C52.9591 13.2 52.7124 12.8533 52.3791 12.64C52.0457 12.4133 51.6124 12.3 51.0791 12.3ZM69.1753 15.52C69.1753 16.4267 69.0486 17.2333 68.7953 17.94C68.5553 18.6467 68.202 19.2467 67.7353 19.74C67.282 20.22 66.7286 20.5867 66.0753 20.84C65.422 21.08 64.682 21.2 63.8553 21.2C63.0953 21.2 62.3886 21.08 61.7353 20.84C61.0953 20.5867 60.542 20.22 60.0753 19.74C59.6086 19.2467 59.242 18.6467 58.9753 17.94C58.722 17.2333 58.5953 16.4267 58.5953 15.52C58.5953 14.3067 58.8086 13.2867 59.2353 12.46C59.662 11.62 60.2753 10.98 61.0753 10.54C61.8753 10.1 62.822 9.88 63.9153 9.88C64.942 9.88 65.8486 10.1 66.6353 10.54C67.422 10.98 68.042 11.62 68.4953 12.46C68.9486 13.2867 69.1753 14.3067 69.1753 15.52ZM61.6353 15.52C61.6353 16.24 61.7086 16.8467 61.8553 17.34C62.0153 17.82 62.262 18.1867 62.5953 18.44C62.9286 18.68 63.362 18.8 63.8953 18.8C64.4286 18.8 64.8553 18.68 65.1753 18.44C65.5086 18.1867 65.7486 17.82 65.8953 17.34C66.0553 16.8467 66.1353 16.24 66.1353 15.52C66.1353 14.8 66.0553 14.2 65.8953 13.72C65.7486 13.24 65.5086 12.88 65.1753 12.64C64.842 12.4 64.4086 12.28 63.8753 12.28C63.0886 12.28 62.5153 12.5533 62.1553 13.1C61.8086 13.6333 61.6353 14.44 61.6353 15.52ZM79.2581 17.76C79.2581 18.4933 79.0848 19.12 78.7381 19.64C78.3915 20.1467 77.8715 20.5333 77.1781 20.8C76.4848 21.0667 75.6248 21.2 74.5981 21.2C73.8381 21.2 73.1848 21.1467 72.6381 21.04C72.0915 20.9467 71.5448 20.7867 70.9981 20.56V18.1C71.5848 18.3667 72.2181 18.5867 72.8981 18.76C73.5781 18.9333 74.1781 19.02 74.6981 19.02C75.2848 19.02 75.6981 18.9333 75.9381 18.76C76.1915 18.5867 76.3181 18.36 76.3181 18.08C76.3181 17.8933 76.2648 17.7267 76.1581 17.58C76.0648 17.4333 75.8515 17.2667 75.5181 17.08C75.1848 16.8933 74.6648 16.6533 73.9581 16.36C73.2781 16.0667 72.7181 15.78 72.2781 15.5C71.8381 15.2067 71.5115 14.86 71.2981 14.46C71.0848 14.0467 70.9781 13.5333 70.9781 12.92C70.9781 11.9067 71.3715 11.1467 72.1581 10.64C72.9448 10.1333 73.9915 9.88 75.2981 9.88C75.9781 9.88 76.6248 9.94667 77.2381 10.08C77.8515 10.2133 78.4848 10.4333 79.1381 10.74L78.2381 12.88C77.8781 12.72 77.5315 12.58 77.1981 12.46C76.8648 12.34 76.5381 12.2467 76.2181 12.18C75.9115 12.1133 75.5915 12.08 75.2581 12.08C74.8181 12.08 74.4848 12.14 74.2581 12.26C74.0448 12.38 73.9381 12.56 73.9381 12.8C73.9381 12.9733 73.9915 13.1333 74.0981 13.28C74.2181 13.4133 74.4381 13.56 74.7581 13.72C75.0915 13.88 75.5781 14.0933 76.2181 14.36C76.8448 14.6133 77.3848 14.88 77.8381 15.16C78.2915 15.4267 78.6381 15.7667 78.8781 16.18C79.1315 16.58 79.2581 17.1067 79.2581 17.76ZM7.3 48H4.28V36.24H0.4V33.72H11.18V36.24H7.3V48ZM21.6558 42.52C21.6558 43.4267 21.5291 44.2333 21.2758 44.94C21.0358 45.6467 20.6824 46.2467 20.2158 46.74C19.7624 47.22 19.2091 47.5867 18.5558 47.84C17.9024 48.08 17.1624 48.2 16.3358 48.2C15.5758 48.2 14.8691 48.08 14.2158 47.84C13.5758 47.5867 13.0224 47.22 12.5558 46.74C12.0891 46.2467 11.7224 45.6467 11.4558 44.94C11.2024 44.2333 11.0758 43.4267 11.0758 42.52C11.0758 41.3067 11.2891 40.2867 11.7158 39.46C12.1424 38.62 12.7558 37.98 13.5558 37.54C14.3558 37.1 15.3024 36.88 16.3958 36.88C17.4224 36.88 18.3291 37.1 19.1158 37.54C19.9024 37.98 20.5224 38.62 20.9758 39.46C21.4291 40.2867 21.6558 41.3067 21.6558 42.52ZM14.1158 42.52C14.1158 43.24 14.1891 43.8467 14.3358 44.34C14.4958 44.82 14.7424 45.1867 15.0758 45.44C15.4091 45.68 15.8424 45.8 16.3758 45.8C16.9091 45.8 17.3358 45.68 17.6558 45.44C17.9891 45.1867 18.2291 44.82 18.3758 44.34C18.5358 43.8467 18.6158 43.24 18.6158 42.52C18.6158 41.8 18.5358 41.2 18.3758 40.72C18.2291 40.24 17.9891 39.88 17.6558 39.64C17.3224 39.4 16.8891 39.28 16.3558 39.28C15.5691 39.28 14.9958 39.5533 14.6358 40.1C14.2891 40.6333 14.1158 41.44 14.1158 42.52ZM30.1986 36.88C31.4253 36.88 32.4186 37.36 33.1786 38.32C33.9386 39.2667 34.3186 40.6667 34.3186 42.52C34.3186 43.76 34.1386 44.8067 33.7786 45.66C33.4186 46.5 32.9253 47.1333 32.2986 47.56C31.6719 47.9867 30.9453 48.2 30.1186 48.2C29.5986 48.2 29.1453 48.1333 28.7586 48C28.3853 47.8667 28.0653 47.6933 27.7986 47.48C27.5319 47.2667 27.2986 47.04 27.0986 46.8H26.9386C26.9919 47.0533 27.0319 47.32 27.0586 47.6C27.0853 47.8667 27.0986 48.1333 27.0986 48.4V52.8H24.1186V37.08H26.5386L26.9586 38.5H27.0986C27.2986 38.2067 27.5386 37.94 27.8186 37.7C28.0986 37.4467 28.4319 37.2467 28.8186 37.1C29.2186 36.9533 29.6786 36.88 30.1986 36.88ZM29.2386 39.26C28.7186 39.26 28.3053 39.3667 27.9986 39.58C27.6919 39.7933 27.4653 40.12 27.3186 40.56C27.1853 40.9867 27.1119 41.5267 27.0986 42.18V42.5C27.0986 43.2067 27.1653 43.8067 27.2986 44.3C27.4319 44.78 27.6586 45.1467 27.9786 45.4C28.2986 45.6533 28.7319 45.78 29.2786 45.78C29.7319 45.78 30.1053 45.6533 30.3986 45.4C30.6919 45.1467 30.9119 44.7733 31.0586 44.28C31.2053 43.7867 31.2786 43.1867 31.2786 42.48C31.2786 41.4133 31.1119 40.6133 30.7786 40.08C30.4586 39.5333 29.9453 39.26 29.2386 39.26Z"
                        fill="#FF7C32"/>
                </svg>
                <svg
                    className={styles.logo}
                    width={45}
                    height={57}
                    fill={'#FF7C32'}
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M42.2486 57.0001H19.7514C19.4489 57.0001 19.1688 56.8529 19.0153 56.6132L17.7731 54.6721C17.6947 54.5546 17.6489 54.4168 17.6477 54.2693C17.6477 54.269 17.6477 54.2687 17.6477 54.2682C17.6477 54.2679 17.6477 54.2675 17.6477 54.267C17.6477 54.2664 17.6477 54.2659 17.6477 54.2653C17.6477 54.2649 17.6477 54.2648 17.6477 54.2645C17.6477 54.2638 17.6477 54.2631 17.6477 54.2623V7.59398C17.6477 6.9373 18.2127 6.27388 18.7543 5.78867L18.142 5.21475C17.9854 5.06793 17.8976 4.87071 17.8976 4.66501V3.29812C17.8976 2.86442 18.2798 2.513 18.7516 2.513H24.3454L31.0244 0.0566713C31.4629 -0.104592 31.9594 0.0916876 32.1346 0.493983C32.3097 0.896592 32.0967 1.35369 31.6589 1.51464L28.9441 2.51284H43.2486C43.7204 2.51284 44.1026 2.86426 44.1026 3.29796V4.66485C44.1026 4.87055 44.0148 5.06778 43.8582 5.21459L43.2459 5.78852C43.7875 6.27372 44.3525 6.93715 44.3525 7.59382V54.2623C44.3525 54.2631 44.3525 54.2638 44.3525 54.2645C44.3525 54.2648 44.3525 54.2649 44.3525 54.2653C44.3525 54.2659 44.3525 54.2664 44.3525 54.267C44.3525 54.2675 44.3525 54.2679 44.3525 54.2682C44.3525 54.2687 44.3525 54.269 44.3525 54.2693C44.3511 54.4168 44.3055 54.5546 44.2271 54.6721L42.9849 56.6132C42.8314 56.853 42.5512 57.0001 42.2486 57.0001ZM20.2397 55.4299H41.7603L42.0052 55.0474H19.9948L20.2397 55.4299ZM19.3555 53.4773H42.6445V7.61439C42.5878 7.42408 42.1617 6.98284 41.6978 6.62153H20.3022C19.8387 6.98253 19.4122 7.42408 19.3555 7.61439V53.4773ZM20.36 5.05129H41.64L42.3946 4.34405V4.08308H24.5295C24.5163 4.08339 24.5032 4.08339 24.4904 4.08308H19.6054V4.34405L20.36 5.05129ZM24.3384 47.1078C24.2181 47.1078 24.0962 47.0844 23.9807 47.0352C23.5898 46.8691 23.3944 46.4615 23.5252 46.084L29.0965 30.0117H24.9519C24.6839 30.0117 24.4315 29.8961 24.2701 29.6993C24.1088 29.5027 24.0572 29.2477 24.1309 29.0108L28.6266 14.545C28.7313 14.208 29.0664 13.9756 29.4478 13.9756H37.0087C37.2905 13.9756 37.5544 14.1034 37.7136 14.3174C37.8727 14.5315 37.9067 14.8037 37.8046 15.0454L33.9657 24.1206H38.8477C39.1578 24.1206 39.4436 24.2751 39.5942 24.5245C39.7449 24.7738 39.7365 25.0786 39.5725 25.3207L25.0639 46.7377C24.9034 46.9743 24.6255 47.1078 24.3384 47.1078ZM26.0841 28.4414H30.2651C30.5377 28.4414 30.7939 28.5611 30.9546 28.7633C31.1153 28.9656 31.1614 29.2262 31.0787 29.4651L27.2288 40.5718L37.3096 25.6907H32.7172C32.4354 25.6907 32.1715 25.5629 32.0123 25.3488C31.8531 25.1348 31.8192 24.8625 31.9213 24.6209L35.7601 15.5457H30.0919L26.0841 28.4414Z"/>
                </svg>
            </div>
            <Menu/>
        </div>
    );
};