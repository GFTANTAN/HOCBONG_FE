import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { convertSlug } from '@/config/utils';
import { IScholarship } from "@/types/backend";
import { callFetchScholarshipById } from "@/config/api";
import styles from 'styles/client.module.scss';
import { Row, Skeleton } from "antd";
import dayjs from 'dayjs';

import relativeTime from 'dayjs/plugin/relativeTime';
import ApplyModal from "@/components/client/modal/apply.modal";
dayjs.extend(relativeTime)


const ClientScholarshipDetailPage = (props: any) => {
    const [scholarshipDetail, setScholarshipDetail] = useState<IScholarship | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [visible, setVisible] = useState(true)
    const [visible2, setVisible2] = useState(true)
    const [visible3, setVisible3] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    const id = params?.get("id"); // scholarship id
    useEffect(() => {
        const init = async () => {
            if (id) {
                const res = await callFetchScholarshipById(id);
                if (res?.data) {
                    const data = res.data;
                    const endDate = new Date(data.endDate);

                    const formattedEndDate = endDate.toLocaleDateString('en-GB');
                    data.endDate = formattedEndDate;
                    setScholarshipDetail(data);
                }
                setIsLoading(false);
            }
        }
        init();
    }, [id]);
    const handleClickDetail = (item: IScholarship) => {
        const slug = convertSlug(item.provider.name);

        navigate(`/Provider/${slug}?id=${item.provider._id}`)
    }
    return (
        <div>
            <div
                id="scholarship-landing-page-banner"
                style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    paddingTop: '30px'
                }}
            >
                <section
                    className="relative z-10 px-[24px] c-xl2:px-0 py-[24px] c-md:py-[40px] h-[390px] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-r before:from-black/70 before:to-black/10 !h-[280px] c-md:!h-[390px]"
                    style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        position: "relative",
                        zIndex: 10,
                        paddingTop: "40px",
                        paddingBottom: "40px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        height: "390px",
                    }}
                >
                    <picture
                        style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                        }}
                    >
                        <img
                            className="w-full h-full object-cover absolute top-0 left-0"
                            height={390}
                            width={1903}
                            alt="subject banner"
                            src={`${import.meta.env.VITE_BACKEND_URL}/images/background/${scholarshipDetail?.provider?.background}`}
                            style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                display: "block",
                                verticalAlign: "middle",
                                maxWidth: "100%",
                                position: "absolute",
                                left: "0px",
                                top: "0px",
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                color: "transparent",
                            }}
                        />
                    </picture>
                    <div
                        className="max-w-container mx-auto relative z-20 flex flex-col h-full"
                        style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            zIndex: 20,
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "flex",
                            height: "100%",
                            maxWidth: "1216px",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            className="max-w-[750px]"
                            style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                maxWidth: "750px",
                            }}
                        >
                            <ol
                                className="hidden c-lg:inline-block font-custom-regular text-small breadcrumbs"
                                itemType="https://schema.org/BreadcrumbList"
                                style={{
                                    border: "0px solid rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    listStyle: "none",
                                    margin: "0px",
                                    padding: "0px",
                                    fontSize: "14px",
                                    lineHeight: 1.4,
                                    display: "inline-block",
                                    fontFamily: "Open Sans, sans-serif",
                                    fontWeight: 400,
                                }}
                            >
                                <li
                                    className="text-white inline"
                                    itemProp="itemListElement"
                                    itemType="https://schema.org/ListItem"
                                    title="SFMS"
                                    style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        display: "inline",
                                        color: "rgb(255 255 255/1)",
                                    }}
                                >
                                    <a
                                        className="text-white"
                                        href="#"
                                        itemProp="item"
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            textDecoration: "inherit",
                                            cursor: "pointer",
                                            textDecorationLine: "none",
                                            color: "rgb(255 255 255/1)",
                                        }}
                                    >
                                        <span
                                            itemProp="name"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                            }}
                                        >
                                            SFMS
                                        </span>
                                    </a>
                                    <meta
                                        content="1"
                                        itemProp="position"
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                        }}
                                    />
                                    <span
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                        }}
                                    >
                                        {" "}
                                        /{" "}
                                    </span>
                                </li>
                                <li
                                    className="text-white inline"
                                    itemProp="itemListElement"
                                    itemType="https://schema.org/ListItem"
                                    title="Nộp Đơn Ngay"
                                    style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        display: "inline",
                                        color: "rgb(255 255 255/1)",
                                    }}
                                >
                                    <a
                                        className="pointer-events-none text-white"
                                        itemProp="item"
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            textDecoration: "inherit",
                                            cursor: "pointer",
                                            textDecorationLine: "none",
                                            pointerEvents: "none",
                                            color: "rgb(255 255 255/1)",
                                        }}
                                    >
                                        <span
                                            itemProp="name"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                            }}
                                        >
                                            {scholarshipDetail?.name}
                                        </span>
                                    </a>
                                    <meta
                                        content="2"
                                        itemProp="position"
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                        }}
                                    />
                                    <span
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                        }}
                                    />
                                </li>
                            </ol>
                            <ul
                                className="flex c-lg:hidden text-x-small font-custom-regular"
                                style={{
                                    border: "0px solid rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    listStyle: "none",
                                    margin: "0px",
                                    padding: "0px",
                                    fontSize: "12px",
                                    lineHeight: 1.3,
                                    display: "none",
                                    fontFamily: "Open Sans, sans-serif",
                                    fontWeight: 400,
                                }}
                            >
                                <li
                                    className="text-white"
                                    style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        color: "rgb(255 255 255/1)",
                                    }}
                                >
                                    <a
                                        className="text-white"
                                        title="SFMS"
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            textDecoration: "inherit",
                                            cursor: "pointer",
                                            textDecorationLine: "none",
                                            color: "rgb(255 255 255/1)",
                                        }}
                                    >
                                        SFMS
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="mt-auto"
                            style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                marginTop: "auto",
                            }}
                        >
                            <div
                                className="max-w-[750px]"
                                style={{
                                    border: "0px solid rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    maxWidth: "750px",
                                }}
                            >
                                <h1
                                    className="text-white c-lg:line-clamp-3 line-clamp-5"
                                    style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        fontSize: "48px",
                                        lineHeight: 1.3,
                                        fontFamily: "Open Sans, sans-serif",
                                        fontWeight: 700,
                                        color: "rgb(255 255 255/1)",
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: "3",
                                    }}
                                >
                                    {scholarshipDetail?.name}
                                </h1>
                                <p
                                    className="text-white c-md:block mt-[8px] hidden"
                                    style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        marginTop: "8px",
                                        color: "rgb(255 255 255/1)",
                                        display: "block",
                                    }}
                                />
                            </div>
                            <a
                                className="text-white c-lg:line-clamp-3 line-clamp-5"
                                onClick={() => {
                                    if (scholarshipDetail) {
                                        handleClickDetail(scholarshipDetail);
                                    }
                                }}
                                style={{
                                    textDecoration: "none",
                                    border: "0px solid rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    margin: "0px",
                                    lineHeight: 1.3,
                                    fontFamily: "Open Sans, sans-serif",
                                    fontWeight: 700,
                                    color: "rgb(255 255 255/1)",
                                    overflow: "hidden",
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: "3",
                                }}
                            >
                                {scholarshipDetail?.provider.name} &gt;
                            </a>
                            {/* <span>
                
              </span> */}
                            <div
                                className="flex w-full gap-[20px] mt-[16px] c-md:mt-[32px]"
                                style={{
                                    border: "0px solid rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    width: "100%",
                                    gap: "20px",
                                    marginTop: "32px",
                                }}
                            >
                                <button
                                    className="btn btn--lg btn--tertiary hidden c-md:block min-w-[250px]"
                                    style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        textTransform: "none",
                                        appearance: "button",
                                        backgroundImage: "none",
                                        cursor: "pointer",
                                        borderRadius: "108px",
                                        borderWidth: "1px",
                                        textAlign: "center",
                                        color: "rgb(255 255 255/1)",
                                        transitionProperty: "all",
                                        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                        transitionDuration: "0.15s",
                                        padding: "12px 28px",
                                        fontSize: "18px",
                                        lineHeight: "24px",
                                        minWidth: "250px",
                                        borderColor: "rgb(214 65 5/1)",
                                        backgroundColor: "rgb(214 65 5/1)",
                                        display: "block",
                                        fontFamily: "Open Sans, sans-serif",
                                        fontWeight: 400,
                                    }}
                                >
                                    Nộp Đơn Ngay{" "}
                                </button>
                                <button
                                    className="btn btn--lg btn--white-outline"
                                    aria-label="Share button"
                                    style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        textTransform: "none",
                                        appearance: "button",
                                        backgroundImage: "none",
                                        cursor: "pointer",
                                        borderRadius: "108px",
                                        borderWidth: "1px",
                                        textAlign: "center",
                                        transitionProperty: "all",
                                        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                        transitionDuration: "0.15s",
                                        padding: "12px 28px",
                                        fontSize: "18px",
                                        lineHeight: "24px",
                                        borderColor: "rgb(255 255 255/1)",
                                        color: "rgb(255 255 255/1)",
                                        backgroundColor: "initial",
                                        fontFamily: "Open Sans, sans-serif",
                                        fontWeight: 400,
                                    }}
                                >
                                    <svg
                                        className="text-[24px] leading-[1]"
                                        height="1em"
                                        width="1em"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            display: "block",
                                            verticalAlign: "middle",
                                            fontSize: "24px",
                                            lineHeight: 1,
                                        }}
                                    >
                                        <path
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                            }}
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="flex w-full gap-[16px] bg-grey-light flex-col py-[24px] px-[24px] c-md:hidden"
                    style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        width: "100%",
                        flexDirection: "column",
                        gap: "16px",
                        backgroundColor: "rgb(234 238 242/1)",
                        paddingLeft: "24px",
                        paddingRight: "24px",
                        paddingTop: "24px",
                        paddingBottom: "24px",
                        display: "none",
                    }}
                >
                    <button
                        className="btn btn--lg btn--tertiary text-center"
                        style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            margin: "0px",
                            textTransform: "none",
                            appearance: "button",
                            backgroundImage: "none",
                            cursor: "pointer",
                            borderRadius: "108px",
                            borderWidth: "1px",
                            color: "rgb(255 255 255/1)",
                            transitionProperty: "all",
                            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                            padding: "12px 28px",
                            fontSize: "18px",
                            lineHeight: "24px",
                            textAlign: "center",
                            borderColor: "rgb(214 65 5/1)",
                            backgroundColor: "rgb(214 65 5/1)",
                            fontFamily: "Open Sans, sans-serif",
                            fontWeight: 400,
                        }}
                    >
                        Tìm kiếm học bổng{" "}
                    </button>
                </section>
            </div>
            <div className={`${styles["container"]} ${styles["detail-scholarship-section"]}`} style={{ paddingTop: '30px' }}>
                {isLoading ?
                    <Skeleton />
                    :
                    <Row gutter={[20, 20]}>
                        {scholarshipDetail && scholarshipDetail._id &&
                            <>
                                <div
                                    className="grid grid-cols-2 px-[16px] c-lg:px-0 c-lg:flex gap-[36px] c-lg:gap-[40px] flex-row flex-wrap justify-between"
                                    style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        gridTemplateColumns: "repeat(2, minmax(0px, 1fr))",
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        // justifyContent: "space-between",
                                        display: "flex",
                                        gap: "40px",
                                        paddingLeft: "0px",
                                        paddingRight: "0px",
                                    }}
                                >
                                    <div
                                        className="flex flex-col"
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <p
                                            className="block mb-[4px] c-lg:mb-[8px] font-semibold"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                                margin: "0px",
                                                display: "block",
                                                fontWeight: 600,
                                                marginBottom: "8px",
                                            }}
                                        >
                                            Vị trí
                                        </p>
                                        <p
                                            className="text-heading-6"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                                margin: "0px",
                                                fontSize: "18px",
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {scholarshipDetail.location}
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col"
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <p
                                            className="block mb-[4px] c-lg:mb-[8px] font-semibold"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                                margin: "0px",
                                                display: "block",
                                                fontWeight: 600,
                                                marginBottom: "8px",
                                            }}
                                        >
                                            Ngành
                                        </p>
                                        <p
                                            className="text-heading-6"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                                margin: "0px",
                                                fontSize: "18px",
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {scholarshipDetail.subject.join(',')}
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col"
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <p
                                            className="block mb-[4px] c-lg:mb-[8px] font-semibold"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                                margin: "0px",
                                                display: "block",
                                                fontWeight: 600,
                                                marginBottom: "8px",
                                            }}
                                        >
                                            Dành Cho
                                        </p>
                                        <p
                                            className="text-heading-6"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                                margin: "0px",
                                                fontSize: "18px",
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {scholarshipDetail.level.join(', ')}
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col"
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <p
                                            className="block mb-[4px] c-lg:mb-[8px] font-semibold"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                                margin: "0px",
                                                display: "block",
                                                fontWeight: 600,
                                                marginBottom: "8px",
                                            }}
                                        >
                                            Hình thức tài trợ
                                        </p>
                                        <p
                                            className="text-heading-6"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                                margin: "0px",
                                                fontSize: "18px",
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {scholarshipDetail.fundingMethod}
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col"
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <p
                                            className="block mb-[4px] c-lg:mb-[8px] font-semibold"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                                margin: "0px",
                                                display: "block",
                                                fontWeight: 600,
                                                marginBottom: "8px",
                                            }}
                                        >
                                            Hạn chót
                                        </p>
                                        <p
                                            className="text-heading-6"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                                margin: "0px",
                                                fontSize: "18px",
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {scholarshipDetail.endDate}
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col"
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <p
                                            className="block mb-[4px] c-lg:mb-[8px] font-semibold"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                                margin: "0px",
                                                display: "block",
                                                fontWeight: 600,
                                                marginBottom: "8px",
                                            }}
                                        >
                                            Giá trị học bổng
                                        </p>
                                        <p
                                            className="text-heading-6"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                                margin: "0px",
                                                fontSize: "18px",
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {scholarshipDetail.value
                                                .sort((a, b) => a - b)
                                                .map(value => `${value}%`)
                                                .join('-')}
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col"
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <p
                                            className="block mb-[4px] c-lg:mb-[8px] font-semibold"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                                margin: "0px",
                                                display: "block",
                                                fontWeight: 600,
                                                marginBottom: "8px",
                                            }}
                                        >
                                            Số Lượng Học Bổng
                                        </p>
                                        <p
                                            className="text-heading-6"
                                            style={{
                                                border: "0px solid rgb(229, 231, 235)",
                                                boxSizing: "border-box",
                                                margin: "0px",
                                                fontSize: "18px",
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {scholarshipDetail.quantity}
                                        </p>
                                    </div>
                                </div>
                            </>
                        }
                    </Row>
                }
                <ApplyModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    ScholarshipDetail={scholarshipDetail}
                />
                <div style={{ paddingTop: '80px' }}>
                    <div
                        className="mb-[24px] px-[16px] c-xs:px-[24px] c-xl2:px-0"
                        style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            marginBottom: "24px",
                            paddingLeft: "0px",
                            paddingRight: "0px",
                        }}
                    >
                        <h2
                            className="text-neutral-1"
                            style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                margin: "0px",
                                lineHeight: 1.3,
                                fontSize: "32px",
                                fontFamily: "BuenosAiresVN, sans-serif",
                                fontWeight: 700,
                                color: "rgb(28 31 42/1)",
                            }}
                        >
                            Thông tin về học bổng
                            <span
                                className="block bg-gradient-to-r from-error to-warning-2 w-[24px] h-[6px] rounded-[8px] mt-[4px]"
                                style={{
                                    border: "0px solid rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    marginTop: "4px",
                                    display: "block",
                                    height: "6px",
                                    width: "24px",
                                    borderRadius: "8px",
                                    backgroundImage: "linear-gradient(to right,#e72d2d ,#f96d0b)",
                                }}
                            />
                        </h2>
                        <h3
                            className="text-para c-md:text-heading-5 flex py-[20px] c-md:py-[24px] border-b font-custom-regular accordion-heading border-transparent"
                            style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                margin: "0px",
                                display: "flex",
                                borderBottomWidth: "1px",
                                borderColor: "rgba(0, 0, 0, 0)",
                                paddingTop: "24px",
                                paddingBottom: "24px",
                                fontSize: "20px",
                                lineHeight: 1.3,
                                fontFamily: "BuenosAiresVN, sans-serif",
                                fontWeight: 400,
                            }}
                        >
                            <button
                                className="flex w-full gap-[8px]"
                                aria-label="Collapse Tổng quan "
                                onClick={() => setVisible2(!visible2)}
                                aria-expanded={visible2}
                                aria-controls="collapseWidthExample"
                                style={{
                                    border: "0px solid rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    margin: "0px",
                                    padding: "0px",
                                    fontSize: "100%",
                                    lineHeight: "inherit",
                                    color: "inherit",
                                    textTransform: "none",
                                    appearance: "button",
                                    backgroundColor: "initial",
                                    backgroundImage: "none",
                                    cursor: "pointer",
                                    fontFamily: "BuenosAiresVN, sans-serif",
                                    fontWeight: 400,
                                    display: "flex",
                                    width: "100%",
                                    gap: "8px",
                                }}
                            >
                                <span
                                    className="flex-1 text-left"
                                    style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        flex: "1 1 0%",
                                        textAlign: "left",
                                        fontWeight: 600,
                                    }}
                                >
                                    Tổng Quan
                                </span>
                                <svg
                                    className="relative top-[3px]"
                                    height="1em"
                                    width="1em"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"

                                    style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        display: "block",
                                        verticalAlign: "middle",
                                        position: "relative",
                                        top: "3px",
                                        transform: visible2 ? 'rotate(0deg)' : 'rotate(-90deg)',
                                        transition: 'transform 0.3s ease',
                                    }}
                                >
                                    <path
                                        d="M96 235h320v42H96z"
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                        }}
                                    />

                                </svg>
                            </button>
                        </h3>
                        {visible2 && (
                            <div>
                                <p>{scholarshipDetail?.description}</p>
                            </div>
                        )}

                        <h3
                            className="text-para c-md:text-heading-5 flex py-[20px] c-md:py-[24px] border-b font-custom-regular accordion-heading border-transparent"
                            style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                margin: "0px",
                                display: "flex",
                                borderBottomWidth: "1px",
                                borderColor: "rgba(0, 0, 0, 0)",
                                paddingTop: "24px",
                                paddingBottom: "24px",
                                fontSize: "20px",
                                lineHeight: 1.3,
                                fontFamily: "BuenosAiresVN, sans-serif",
                                fontWeight: 400,
                            }}
                        >
                            <button
                                className="flex w-full gap-[8px]"
                                aria-label="Collapse Tổng quan "
                                onClick={() => setVisible(!visible)}
                                aria-expanded={visible}
                                aria-controls="collapseWidthExample"
                                style={{
                                    border: "0px solid rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    margin: "0px",
                                    padding: "0px",
                                    fontSize: "100%",
                                    lineHeight: "inherit",
                                    color: "inherit",
                                    textTransform: "none",
                                    appearance: "button",
                                    backgroundColor: "initial",
                                    backgroundImage: "none",
                                    cursor: "pointer",
                                    fontFamily: "BuenosAiresVN, sans-serif",
                                    fontWeight: 400,
                                    display: "flex",
                                    width: "100%",
                                    gap: "8px",
                                }}
                            >
                                <span
                                    className="flex-1 text-left"
                                    style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        flex: "1 1 0%",
                                        textAlign: "left",
                                    }}
                                >
                                    Yêu Cầu
                                </span>
                                <svg
                                    className="relative top-[3px]"
                                    height="1em"
                                    width="1em"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"

                                    style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        display: "block",
                                        verticalAlign: "middle",
                                        position: "relative",
                                        top: "3px",
                                        transform: visible ? 'rotate(0deg)' : 'rotate(-90deg)',
                                        transition: 'transform 0.3s ease',
                                    }}
                                >
                                    <path
                                        d="M96 235h320v42H96z"
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                        }}
                                    />

                                </svg>
                            </button>
                        </h3>
                        {visible && (
                            <div>
                                {/* Nội dung cần collapse */}
                                <p>{scholarshipDetail?.requirement}</p>
                            </div>
                        )}

                        <h3
                            className="text-para c-md:text-heading-5 flex py-[20px] c-md:py-[24px] border-b font-custom-regular accordion-heading border-transparent"
                            style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                margin: "0px",
                                display: "flex",
                                borderBottomWidth: "1px",
                                borderColor: "rgba(0, 0, 0, 0)",
                                paddingTop: "24px",
                                paddingBottom: "24px",
                                fontSize: "20px",
                                lineHeight: 1.3,
                                fontFamily: "BuenosAiresVN, sans-serif",
                                fontWeight: 400,
                            }}
                        >
                            <button
                                className="flex w-full gap-[8px]"
                                aria-label="Collapse Tổng quan "
                                onClick={() => setVisible3(!visible3)}
                                aria-expanded={visible3}
                                aria-controls="collapseWidthExample"
                                style={{
                                    border: "0px solid rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    margin: "0px",
                                    padding: "0px",
                                    fontSize: "100%",
                                    lineHeight: "inherit",
                                    color: "inherit",
                                    textTransform: "none",
                                    appearance: "button",
                                    backgroundColor: "initial",
                                    backgroundImage: "none",
                                    cursor: "pointer",
                                    fontFamily: "BuenosAiresVN, sans-serif",
                                    fontWeight: 400,
                                    display: "flex",
                                    width: "100%",
                                    gap: "8px",
                                }}
                            >
                                <span
                                    className="flex-1 text-left"
                                    style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        flex: "1 1 0%",
                                        textAlign: "left",
                                    }}
                                >
                                    Làm Sao Để Đăng Ký
                                </span>
                                <svg
                                    className="relative top-[3px]"
                                    height="1em"
                                    width="1em"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"

                                    style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        display: "block",
                                        verticalAlign: "middle",
                                        position: "relative",
                                        top: "3px",
                                        transform: visible3 ? 'rotate(0deg)' : 'rotate(-90deg)',
                                        transition: 'transform 0.3s ease',
                                    }}
                                >
                                    <path
                                        d="M96 235h320v42H96z"
                                        style={{
                                            border: "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                        }}
                                    />

                                </svg>
                            </button>
                        </h3>
                        {visible3 && (
                            <div>
                                {/* Nội dung cần collapse */}
                                <p>{scholarshipDetail?.requirement}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ClientScholarshipDetailPage;