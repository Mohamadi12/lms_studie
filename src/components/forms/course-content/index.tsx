"use client";
import { Button } from "@/components/ui/button";
import BlockTextEditor from "../../global/rich-text-editor";
import { Loader } from "../../global/loader";
import { HtmlParser } from "../../global/html-parser";
import { useCourseContent, useCourseSectionInfo } from "@/src/hooks/courses";

type CourseContentFormProps = {
  sectionid: string;
  userid: string;
  groupid: string;
};

export const CourseContentForm = ({
  sectionid,
  userid,
  groupid,
}: CourseContentFormProps) => {
  const { data } = useCourseSectionInfo(sectionid);

  const {
    errors,
    onUpdateContent,
    setJsonDescription,
    setOnDescription,
    onEditDescription,
    setOnHtmlDescription,
    editor,
    isPending,
  } = useCourseContent(
    sectionid,
    data?.section?.content || null,
    data?.section?.JsonContent || null,
    data?.section?.htmlContent || null
  );

  return groupid === userid ? (
    <form onSubmit={onUpdateContent} className="p-5 flex flex-col" ref={editor}>
      <BlockTextEditor
        onEdit={onEditDescription}
        max={10000}
        inline
        min={100}
        disabled={userid === groupid ? false : true}
        name="jsoncontent"
        errors={errors}
        setContent={setJsonDescription || undefined}
        content={JSON.parse(data?.section?.JsonContent!)}
        htmlContent={data?.section?.htmlContent || undefined}
        setHtmlContent={setOnHtmlDescription}
        textContent={data?.section?.content || undefined}
        setTextContent={setOnDescription}
      />
      {onEditDescription && (
        <Button
          className="mt-10 self-end bg-themeBlack border-themeGray"
          variant="outline"
        >
          <Loader loading={isPending}>Save Content</Loader>
        </Button>
      )}
    </form>
  ) : (
    <HtmlParser html={data?.section?.htmlContent!} />
  );
};
