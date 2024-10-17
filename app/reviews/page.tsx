import EmptyList from "@/components/home/EmptyList";
import Title from "@/components/properties/Title";
import ReviewCard from "@/components/reviews/ReviewCard";
import { fetchPropertyReviewsByUser } from "@/utils/actions";

export default async function ReviewsPage() {
  const reviews = await fetchPropertyReviewsByUser();
  if (reviews.length === 0) {
    return <EmptyList heading="No reviews to display." />;
  }

  return (
    <>
      <Title text="Your Reviews" />
      <section className="grid md:grid-cols-2 gap-8 mt-4 ">
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { firstName, profileImage } = review.profile;
          const reviewInfo = {
            comment,
            rating,
            name: firstName,
            image: profileImage,
          };
          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              {/* <DeleteReview reviewId={review.id} /> */}
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
}
